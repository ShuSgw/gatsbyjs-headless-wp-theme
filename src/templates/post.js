import React from "react"
import Layout from "../components/layout/Layout"
import Container from "../components/container/Container"
import Img from "gatsby-image"

const postTemplate = props => {
  const { title, content, acf, featured_media } = props.data.wordpressPost

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>{acf ? (acf.name ? acf.name : "no name") : "no data"}</p>
        {featured_media && (
          <Img fixed={featured_media.localFile.childImageSharp.fixed} />
        )}
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
            fixed(height: 300, width: 300) {
              height
              width
              src
              srcSet
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
