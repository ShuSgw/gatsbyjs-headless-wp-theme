import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"

// import Image from "../components/Image"
// import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <h1>index.html</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
