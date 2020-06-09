/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const $ = require("jquery")

export const onInitialClientRender = () => {
  $.getJSON('https://ipapi.co/json/', function(data){
    $("#ipaddress").html(data.ip);
	$("#country").html(data.country_name);
	$("#city").html(data.city);
	$("#zip").html(data.postal);
	$("#isp").html(data.org);
	$("#timezone").html(data.timezone);
  });
  
}
