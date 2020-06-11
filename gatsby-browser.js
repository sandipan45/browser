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
  
	$(document).ready(function () {
		var instance = $.fn.deviceDetector;
		console.log(instance.getInfo());
		$("#isAandroid").html(instance.getInfo().android);
		$("#isBlackberry").html(instance.getInfo().blackberry);
		$("#isDesktop").html(instance.getInfo().desktop);
		$("#browserName").html(instance.getInfo().browserName);
		$("#browserVersion").html(instance.getInfo().browserVersion);
		$("#isBsd").html(instance.getInfo().bsd);
		$("#isChrome").html(instance.getInfo().chrome);
		$("#isEdge").html(instance.getInfo().edge);
		$("#isFirefox").html(instance.getInfo().firefox);
		$("#isIe").html(instance.getInfo().ie);
		$("#isieMobile").html(instance.getInfo().ieMobile);
		$("#isIos").html(instance.getInfo().ios);
		$("#isIpad").html(instance.getInfo().ipad);
		$("#isIphone").html(instance.getInfo().iphone);
		$("#isLinux").html(instance.getInfo().linux);
		$("#isMacos").html(instance.getInfo().macos);
		$("#isMobile").html(instance.getInfo().mobile);
		$("#isMsie").html(instance.getInfo().msie);
		$("#isOpera").html(instance.getInfo().opera);
		$("#isOperaMini").html(instance.getInfo().operaMini);
		$("#isOsId").html(instance.getInfo().osId);
		$("#isOsname").html(instance.getInfo().osName);
		$("#isOsVersion").html(instance.getInfo().osVersion);
		$("#isosVersionBugfix").html(instance.getInfo().osVersionBugfix);
		$("#isSafari").html(instance.getInfo().safari);
		$("#isWindows").html(instance.getInfo().windows);
		$("#isWindowsPhone").html(instance.getInfo().windowsPhone);
	});
}
