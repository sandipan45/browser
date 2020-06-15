/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const $ = require("jquery")

export const onInitialClientRender = () => {
  $.getJSON('https://ipapi.co/json/', function(data){
	//console.log("browser.render data", data);
    $("#ipaddress").html(data.ip);
	$("#country").html(data.country_name);
	$("#city").html(data.city);
	$("#zip").html(data.postal);
	$("#isp").html(data.org);
	$("#timezone").html(data.timezone);
  });
		
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		
		// associate array to store all values
		var data = new Object();
		
		// get all headers in one call and parse each item
		var headers = req.getAllResponseHeaders().toLowerCase();
		var aHeaders = headers.split('\n');
		var i =0;
		for (i= 0; i < aHeaders.length; i++) {
			var thisItem = aHeaders[i];
			var key = thisItem.substring(0, thisItem.indexOf(':'));
			var value = thisItem.substring(thisItem.indexOf(':')+1);
			data[key] = value;
		}	    

		// get referer
		var referer = document.referrer;
		data["Referer"] = referer;

		//get useragent
		var useragent = navigator.userAgent;
		data["UserAgent"] = useragent;

		
		//extra code to display the values in html
		var display = "";
		for(key in data) {
			if (key !== "")
			display += "<tr><th width='35%' scope='row'>" + key + " :</th> <td width='65%' class='valueRed'>" + data[key] + "</td></tr>";
		}
		document.getElementById("dump").innerHTML =  display; 

		function get_cookies_array() {
			var cookies = { };
			if (document.cookie && document.cookie != '') {
				var split = document.cookie.split(';');
				for (var i = 0; i < split.length; i++) {
					var name_value = split[i].split("=");
					name_value[0] = name_value[0].replace(/^ /, '');
					cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
				}
			}
			return cookies;		   
		}
		var cookies = get_cookies_array();
		//console.log(cookies);
		

}
