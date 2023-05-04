const apiURL = "https://web1-api.vercel.app/api";

async function getData(request, templateId, viewId, props={}) {
	const response = await fetch(`${apiURL}/${request}`);
	const jsonData = await response.json();
	
	const context = {};
	context.data = jsonData;
	Object.assign(context.data, props);
	
	var source = document.getElementById(templateId).innerHTML;
	var template = Handlebars.compile(source);
	var html = template(context);
	document.getElementById(viewId).innerHTML = html;
}
