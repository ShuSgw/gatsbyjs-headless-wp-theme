import React from "react"
import Layout from "../components/layout/Layout"
import Container from "../components/container/Container"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const postTemplate = props => {
  const { title, content, acf, featured_media } = props.data.wordpressPost

  return (
    <Layout>
      {featured_media && (
        <BackgroundImage fluid={featured_media.localFile.childImageSharp.fluid}>
          <Container>
            <h1>{title}</h1>
          </Container>
        </BackgroundImage>
      )}
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>{acf ? (acf.name ? acf.name : "no name") : "no data"}</p>
      </Container>
    </Layout>
  )
}

export default postTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
      acf {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
              base64
              sizes
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
