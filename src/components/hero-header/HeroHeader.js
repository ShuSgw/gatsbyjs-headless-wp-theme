import React from "react"
import {
  hero_header,
  container,
  hero_header_title,
  hero_contentsBox,
} from "./hero_header.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const HeroHeader = props => {
  const imageDataQueried = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = imageDataQueried.desktop.childImageSharp.fluid
  return (
    <BackgroundImage className={hero_header} fluid={imageData}>
      <div className={container}>
        <div className={hero_contentsBox}>
          <h1 className={hero_header_title}>
            この文章はダミーです 文字の大きさ、 量、字間、
          </h1>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HeroHeader
