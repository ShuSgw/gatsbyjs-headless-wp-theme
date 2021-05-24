import React from "react"
import
{
  hero_header,
  container,
  hero_header_title,
  hero_contentsBox,
} from "./hero_header.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Container from "../container/Container"

const HeroHeader = props =>
{
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
      <Container>
        <div className={hero_contentsBox}>
          <div className={hero_header_title}>
            RANUNCULUS DESIGN<br />2人の軌跡をカタチにする
          </div>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default HeroHeader
