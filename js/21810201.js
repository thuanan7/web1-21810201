const apiURL = "https://web1-api.vercel.app/api";

async function getData(request, templateId, viewId) {
	const response = await fetch(`${apiURL}/${request}`);
	const jsonData = await response.json();
	var source = document.getElementById(templateId).innerHTML;
	var template = Handlebars.compile(source);
	var html = template({ data: jsonData });
	document.getElementById(viewId).innerHTML = html;
}
