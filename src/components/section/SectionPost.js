import React from "react"
import Img from "gatsby-image"
import
  {
    container,
    thumbPlaceHolder,
    h3_line,
    thumb,
    post_box,
    post_box_single,
    post_box_single_title,
  } from "./sections.module.scss"
import Container from "../container/Container"
import Image from "../image"
import { Link } from "gatsby"

const SectionPost = ({ data, sectionTitle }) =>
{
  return (
    <section>
      <Container>
        <div className="custom_h3">
          <span className={h3_line}>{sectionTitle}</span>
        </div>
        <div className={post_box}>
          {data.map((data, key) =>
          {
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
                <div className={post_box_single_title}>{data.node.title}</div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SectionPost
