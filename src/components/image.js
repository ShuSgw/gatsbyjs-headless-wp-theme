import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(singleImageData => {
    return singleImageData.node.relativePath.includes(props.fileName)
  })
  if (!image) return

  return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
}

export default Image
