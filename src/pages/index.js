import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import App from "../components/ipaddress"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>Ip Address: <span id="ipaddress"></span></div>
	<div>Country: <span id="country"></span></div>
	<div>City: <span id="city"></span></div>
	<div>Zip/Postal Code: <span id="zip"></span></div>
	<div>ISP: <span id="isp"></span></div>
	<div>Timezone: <span id="timezone"></span></div>
  </Layout>
)

export default IndexPage
