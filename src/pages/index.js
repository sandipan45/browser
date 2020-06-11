import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
const device = deviceDetector.parse(userAgent);
console.log(device);

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
	<h4>General Data::</h4>
    <div>Ip Address: <span id="ipaddress" className="valueRed"></span></div>
	<div>Country: <span className="valueRed" id="country"></span></div>
	<div>City: <span className="valueRed" id="city"></span></div>
	<div>Zip/Postal Code: <span className="valueRed" id="zip"></span></div>
	<div>ISP: <span className="valueRed" id="isp"></span></div>
	<div>Timezone: <span className="valueRed" id="timezone"></span></div>
	<p>&nbsp;</p>
	<h4>Header Data::</h4>
	<div id="dump"></div>
	<p>&nbsp;</p>
	<h4>Device Tracking Data::</h4>
	<div>Browser: <span className="valueRed">{device.client.name}</span></div>
	<div>Browser Version: <span className="valueRed">{device.client.version}</span></div>
	<div>Device Type: <span className="valueRed">{device.device.type}</span></div>
	<div>Device Barnd: <span className="valueRed">{device.device.brand}</span></div>
	<div>Device Model: <span className="valueRed">{device.device.model}</span></div>
	<div>Os Name: <span className="valueRed">{device.os.name}</span></div>
	<div>Os Version: <span className="valueRed">{device.os.version}</span></div>
	<div>Os Platform: <span className="valueRed">{device.os.platform}</span></div>
	<div>BOT: <span className="valueRed">{device.bot}</span></div>
  </Layout>
)

export default IndexPage
