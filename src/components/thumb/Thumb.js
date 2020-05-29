import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  thumb,
  post_box,
  post_box_single,
  post_box_single_title,
} from "./thumb..module.scss"
import ThumbWrap from "./ThumbWrap"

const Thumbs = ({ eachPost }) => {
  return (
    <Link className={post_box_single} to={`/post/${eachPost.node.id}`}>
      {eachPost.node.featured_media ? (
        <div className={thumb}>
          <Img
            fluid={eachPost.node.featured_media.localFile.childImageSharp.fluid}
          />
        </div>
      ) : (
        ""
      )}
      <div className={post_box_single_title}>{eachPost.node.title}</div>
    </Link>
  )
}

export default Thumbs
