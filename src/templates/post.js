import React from "react"
import Layout from "../components/layout/Layout"
import Container from "../components/container/Container"
import OtherHeros from "../components/hero-header/OtherHeros"

const postTemplate = props => {
  const { title, content, acf, featured_media } = props.data.wordpressPost

  return (
    <Layout>
      {featured_media && (
        <OtherHeros title={title} featured_media={featured_media} />
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
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
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
