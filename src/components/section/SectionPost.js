import React from "react"
import Img from "gatsby-image"
import { container, thumbPlaceHolder, h3_line } from "./sections.module.scss"
import Image from "../image"

const SectionPost = ({ data, sectionTitle }) => {
  return (
    <section>
      <div className={container}>
        <h3>
          <span className={h3_line}>{sectionTitle}</span>
        </h3>
        {data.map((data, key) => {
          return (
            <div key={key}>
              <h4>{data.node.title}</h4>
              {data.node.featured_media ? (
                <Img
                  fixed={
                    data.node.featured_media.localFile.childImageSharp.fixed
                  }
                />
              ) : (
                <div className={thumbPlaceHolder}>
                  <Image fileName="gatsby-astronaut.png" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionPost
