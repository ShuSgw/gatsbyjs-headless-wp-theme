import React from "react"
import Layout from "../components/layout/Layout"
import Container from "../components/container/Container"
import OtherHeros from "../components/hero-header/OtherHeros"
import OtherHeros_placeholder from "../components/hero-header/OtherHeros_placeholder"

const pageTemplate = props => {
  const { title, content, acf, featured_media } = props.data.wordpressPage

  return (
    <Layout>
      {featured_media ? (
        <OtherHeros title={title} featured_media={featured_media} />
      ) : (
        <OtherHeros_placeholder title={title} />
      )}
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {acf ? (acf.name ? acf.name : "") : ""}
      </Container>
    </Layout>
  )
}

export default pageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
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
  }
`
