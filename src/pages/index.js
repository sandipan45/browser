import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <div>Ip Address: <span id="ipaddress" className="valueRed"></span></div>
	<div>Country: <span className="valueRed" id="country"></span></div>
	<div>City: <span className="valueRed" id="city"></span></div>
	<div>Zip/Postal Code: <span className="valueRed" id="zip"></span></div>
	<div>ISP: <span className="valueRed" id="isp"></span></div>
	<div>Timezone: <span className="valueRed" id="timezone"></span></div>
	<p>&nbsp;</p>
	<h4>Header Data::</h4>
	<div id="dump"></div>
	
	
  </Layout>
)

export default IndexPage
