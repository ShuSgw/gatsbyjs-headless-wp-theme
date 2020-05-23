import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import HeroHeader from "../components/hero-header/HeroHeader"
import Sections from "../components/section/Sections"

// import Image from "../components/Image"
// import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <HeroHeader />
    <Sections />
  </Layout>
)

export default IndexPage
