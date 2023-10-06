const formUuid  = document.querySelector( "#uuid" );
const formName  = document.querySelector( "#name" );
const formEmail = document.querySelector( "#email" );

const obtainRequest 	= document.querySelector( "#obtainRequest" );
const btnSubmit 		= document.querySelector( "#btnSend" );
const responseDataTable = document.querySelector( "#responseDataTable" );

const responseDiv = document.querySelector( "#responseDiv" );

const optionGETAll = document.querySelector( "#optionGETAll" );
const optionGET = document.querySelector( "#optionGET" );
const optionPOST = document.querySelector( "#optionPOST" );
const optionPATCH = document.querySelector( "#optionPATCH" );
const optionDELETE = document.querySelector( "#optionDELETE" );

const apiUrl = "https://nestjs-vite-pwa-api.onrender.com/"

const startApp = () => {

	responseDiv.hidden = true;

	formUuid.disabled = true;
	formName.disabled = true;
	formEmail.disabled = true;

	// fetch( apiUrl + "seed" )
	// 	.then( res => res.text() )
	// 	.then( result => console.log( result ) )
	// 	.catch( error => console.log( 'error', error ));
}

const showResponse = ( response ) => {

	responseDataTable.innerHTML = "";

	response.forEach( user => {

		const tableDataContainer = document.createElement( "tr" );
		tableDataContainer.innerHTML = `
			<td>${ user.id }</td>
			<td>${ user.name }</td>
			<td>${ user.email }</td>
		`;

		responseDiv.hidden = false;
		responseDataTable.append( tableDataContainer );
	});
}

const showError = ( response ) => {

	responseDataTable.innerHTML = "";

	const tableDataContainer = document.createElement( "tr" );
	tableDataContainer.innerHTML = `
		<td>${ response.message }</td>
		<td>${ response.statusCode }</td>
		<td>${ response.error }</td>
	`;

	responseDiv.hidden = false;
	responseDataTable.append( tableDataContainer );
}

const peticionGetAll = () => {

	fetch( apiUrl + "users" )
	.then( response => { 
		if ( response.ok ) response.json().then( showResponse );
		else response.json().then( showError );
	})
	.catch( error => console.log( 'error', error ) );
}

const peticionGet = () => {

	fetch( apiUrl + "users/" + formUuid.value  )
	.then( response => { 
		if ( response.ok ) response.json().then( showResponse );
		else response.json().then( showError );
	})
	.catch( error => console.log( 'error', error ) );
}

const peticionPost = () => {

	const bodyData = {
		name: formName.value,
		email: formEmail.value,
	}

	fetch( apiUrl + "users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify( bodyData ),
	})
	.then( response => { 
		if ( response.ok ) response.json().then( showResponse );
		else response.json().then( showError );
	})
	.catch( error => console.log( 'error', error ) );
}

const peticionPatch = () => {

	const bodyData = {
		name: formName.value,
		email: formEmail.value,
	}

	fetch( apiUrl + "users/" + formUuid.value, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify( bodyData ),
	})
	.then( response => { 
		if ( response.ok ) response.json().then( showResponse );
		else response.json().then( showError );
	})
	.catch( error => console.log( 'error', error ) );
}

const peticionDelete = () => {

	fetch( apiUrl + "users/" + formUuid.value, { method: "DELETE" })
	.then( response => { 
		if ( response.ok ) response.json().then( showResponse );
		else response.json().then( showError );
	})
	.catch( error => console.log( 'error', error ) );
}

obtainRequest.addEventListener( "change", () => {

	if ( obtainRequest.value === "GETAll" ){
		formUuid.disabled =  true;
		formName.disabled =  true;
		formEmail.disabled = true;
	}
	if ( obtainRequest.value === "GET" ){
		formUuid.disabled =  false;
		formName.disabled =  true;
		formEmail.disabled = true;
	}
	if ( obtainRequest.value === "POST" ){
		formUuid.disabled =  true;
		formName.disabled =  false;
		formEmail.disabled = false;
	}
	if ( obtainRequest.value === "PATCH" ){
		formUuid.disabled =  false;
		formName.disabled =  false;
		formEmail.disabled = false;
	}
	if ( obtainRequest.value === "DELETE" ){
		formUuid.disabled =  false;
		formName.disabled =  true;
		formEmail.disabled = true;
	}	
});

optionGETAll.addEventListener( "click", () => {

		formUuid.disabled =  true;
		formName.disabled =  true;
		formEmail.disabled = true;
});

optionGET.addEventListener( "click", () => {

		formUuid.disabled =  false;
		formName.disabled =  true;
		formEmail.disabled = true;
});

optionPOST.addEventListener( "click", () => {

		formUuid.disabled =  true;
		formName.disabled =  false;
		formEmail.disabled = false;
});

optionPATCH.addEventListener( "click", () => {

		formUuid.disabled =  false;
		formName.disabled =  false;
		formEmail.disabled = false;
});

optionDELETE.addEventListener( "click", () => {

		formUuid.disabled =  false;
		formName.disabled =  true;
		formEmail.disabled = true;
});

btnSubmit.addEventListener( "click", () => {

	console.log( obtainRequest.value );

	if ( obtainRequest.value === "GETAll" ) peticionGetAll();
	if ( obtainRequest.value === "GET" ) peticionGet();
	if ( obtainRequest.value === "POST" ) peticionPost();
	if ( obtainRequest.value === "PATCH" ) peticionPatch();
	if ( obtainRequest.value === "DELETE" ) peticionDelete();
});

startApp();
