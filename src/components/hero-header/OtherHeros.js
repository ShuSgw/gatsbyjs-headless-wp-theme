import React from "react"
import {
  other_heros,
  other_heros_box,
  hero_header_title,
} from "./hero_header.module.scss"
import BackgroundImage from "gatsby-background-image"

const OtherHero = ({ title, featured_media }) => {
  return (
    <BackgroundImage
      className={other_heros}
      fluid={featured_media.localFile.childImageSharp.fluid}
    >
      <div className={other_heros_box}>
        <h1 className={hero_header_title}>{title}</h1>
      </div>
    </BackgroundImage>
  )
}

export default OtherHero
