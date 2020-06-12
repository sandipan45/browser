import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
const device = deviceDetector.parse(userAgent);
//console.log(device);

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
	
	
		<table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colspan="2" scope="row">
	   <td align="center">General Data</td>

	  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th width="35%" scope="row">Ip Address :</th>
      <td width="65%" id="ipaddress" className="valueRed"></td>
    </tr>
    <tr>
      <th scope="row">Country :</th>
      <td className="valueRed" id="country"></td>
    </tr>
    <tr>
      <th scope="row">City :</th>
      <td className="valueRed" id="city"></td>
    </tr>
    <tr>
      <th scope="row">Zip/Postal Code :</th>
      <td className="valueRed" id="zip"></td>
    </tr>
    <tr>
      <th scope="row">ISP :</th>
      <td className="valueRed" id="isp"></td>
    </tr>
    <tr>
      <th scope="row">Timezone :</th>
      <td className="valueRed" id="timezone"></td>
    </tr>
  </tbody>
</table>
	

	
	
	
		<table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colspan="2" scope="row">
      <td align="center">Header Data</td>
	  </th>
    </tr>
  </thead>
  <tbody id="dump">
  </tbody>
</table>
	

	
	
	
	
	
	
	
	
		<table className="table table-bordered w3-table-all">
  <thead>
    <tr>
       <th colspan="2" scope="row">
      <td align="center">Device Tracking Data</td>
	  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th width="35%" scope="row">Browser :</th>
      <td width="65%" className="valueRed">{device.client.name}</td>
    </tr>
    <tr>
      <th scope="row">Browser Version :</th>
      <td className="valueRed">{device.client.version}</td>
    </tr>
    <tr>
      <th scope="row">Device Type :</th>
      <td className="valueRed">{device.device.type}</td>
    </tr>
    <tr>
      <th scope="row">Device Barnd :</th>
      <td className="valueRed">{device.device.brand}</td>
    </tr>
    <tr>
      <th scope="row">Device Model :</th>
      <td className="valueRed">{device.device.model}</td>
    </tr>
    <tr>
      <th scope="row">Os Name :</th>
      <td className="valueRed">{device.os.name}</td>
    </tr>
    <tr>
      <th scope="row">Os Version :</th>
      <td className="valueRed">{device.os.version}</td>
    </tr>
    <tr>
      <th scope="row">Os Platform :</th>
      <td className="valueRed">{device.os.platform}</td>
    </tr>
    <tr>
      <th scope="row">BOT :</th>
      <td className="valueRed">{device.bot}</td>
    </tr>
  </tbody>
</table>	
  </Layout>
)

export default IndexPage
