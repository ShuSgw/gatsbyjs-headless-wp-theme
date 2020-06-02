// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/layout/Layout"

// import Layout from "../components/Layout"
// import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
  </Layout>
)

export default SecondPage
