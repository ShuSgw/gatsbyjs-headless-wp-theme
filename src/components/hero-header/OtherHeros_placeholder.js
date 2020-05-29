import React from "react"
import {
  other_heros,
  other_heros_box,
  hero_header_title,
} from "./hero_header.module.scss"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container/Container"
const OtherHero = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_placeholder.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className={other_heros}
      fluid={data.file.childImageSharp.fluid}
    >
      <Container>
        <div className={other_heros_box}>
          <h1 className={hero_header_title}>{title}</h1>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default OtherHero
