const RESOWebApiClient = require('./reso_web_api_client.js');

const client = new RESOWebApiClient('http://services.odata.org/v4/OData/OData.svc');

async function Main() {
	const products_response = await client.get('Products');
	console.log(products_response);
}

Main();