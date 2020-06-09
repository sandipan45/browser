/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const $ = require("jquery")

export const onInitialClientRender = () => {
  $.getJSON('http://ip-api.com/json', function(data){
    $("#ipaddress").html(data.query);
	$("#country").html(data.country);
	$("#city").html(data.city);
	$("#zip").html(data.zip);
	$("#isp").html(data.isp);
	$("#timezone").html(data.timezone);
  });
  
}
