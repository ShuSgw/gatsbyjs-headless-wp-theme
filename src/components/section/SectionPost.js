import React from "react"
import Img from "gatsby-image"
import {
  container,
  thumbPlaceHolder,
  h3_line,
  thumb,
  post_box,
  post_box_single,
  post_box_single_title,
} from "./sections.module.scss"
import Image from "../image"
import { Link } from "gatsby"

const SectionPost = ({ data, sectionTitle }) => {
  return (
    <section>
      <div className={container}>
        <h3>
          <span className={h3_line}>{sectionTitle}</span>
        </h3>
        <div className={post_box}>
          {data.map((data, key) => {
            return (
              <Link
                to={`/post/${data.node.id}`}
                className={post_box_single}
                key={key}
              >
                {data.node.featured_media ? (
                  <div className={thumb}>
                    <Img
                      fluid={
                        data.node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                ) : (
                  <div className={thumbPlaceHolder}>
                    <Image fileName="gatsby-astronaut.png" />
                  </div>
                )}
                <h4 className={post_box_single_title}>{data.node.title}</h4>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionPost
