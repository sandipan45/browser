import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./dist/jquery.device.detector.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>Ip Address: <span id="ipaddress" className="valueRed"></span></div>
	<div>Country: <span className="valueRed" id="country"></span></div>
	<div>City: <span className="valueRed" id="city"></span></div>
	<div>Zip/Postal Code: <span className="valueRed" id="zip"></span></div>
	<div>ISP: <span className="valueRed" id="isp"></span></div>
	<div>Timezone: <span className="valueRed" id="timezone"></span></div>
	<p>&nbsp;</p>
	<h4>Device Track::</h4>
	<div>Android: <span className="valueRed" id="isAandroid"></span></div>
	<div>Blackberry: <span className="valueRed" id="isBlackberry"></span></div>
	<div>Desktop: <span className="valueRed" id="isDesktop"></span></div>
	<div>Browser Name: <span className="valueRed" id="browserName"></span></div>
	<div>Browser Version: <span className="valueRed" id="browserVersion"></span></div>
	<div>BSD: <span className="valueRed" id="isBsd"></span></div>
	<div>Chrome: <span className="valueRed" id="isChrome"></span></div>
	<div>Edge: <span className="valueRed" id="isEdge"></span></div>
	<div>Firefox: <span className="valueRed" id="isFirefox"></span></div>
	<div>IE: <span className="valueRed" id="isIe"></span></div>
	<div>IE Mobile: <span className="valueRed" id="isieMobile"></span></div>
	<div>IOS: <span className="valueRed" id="isIos"></span></div>
	<div>Ipad: <span className="valueRed" id="isIpad"></span></div>
	<div>Iphone: <span className="valueRed" id="isIphone"></span></div>
	<div>Linux: <span className="valueRed" id="isLinux"></span></div>
	<div>Mac Os: <span className="valueRed" id="isMacos"></span></div>
	<div>Mobile: <span className="valueRed" id="isMobile"></span></div>
	<div>Msie: <span className="valueRed" id="isMsie"></span></div>
	<div>Opera: <span className="valueRed" id="isOpera"></span></div>
	<div>Opera Mini: <span className="valueRed" id="isOperaMini"></span></div>
	<div>OsId: <span className="valueRed" id="isOsId"></span></div>
	<div>Os Name: <span className="valueRed" id="isOsname"></span></div>
	<div>Os Version: <span className="valueRed" id="isOsVersion"></span></div>
	<div>Os Version Bugfix: <span className="valueRed" id="isosVersionBugfix"></span></div>
	<div>Safari: <span className="valueRed" id="isSafari"></span></div>
	<div>Windows: <span className="valueRed" id="isWindows"></span></div>
	<div>WindowsPhone: <span className="valueRed" id="isWindowsPhone"></span></div>
  </Layout>
)

export default IndexPage
