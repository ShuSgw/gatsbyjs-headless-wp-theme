import React from "react"
import Layout from "../components/layout/Layout"
import Img from "gatsby-image"
import Container from "../components/container/Container"
import BackgroundImage from "gatsby-background-image"

const pageTemplate = props => {
  const { title, content, acf, featured_media } = props.data.wordpressPage

  return (
    <Layout>
      {/* <BackgroundImage className={hero_header} fluid={imageData}>
        <div className={container}>
          <div className={hero_contentsBox}>
            <h1 className={hero_header_title}>
              この文章はダミーです 文字の大きさ、 量、字間、
          </h1>
          </div>
        </div>
      </BackgroundImage> */}
      <Container>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {/* {console.log(featured_media.localFile.childImageSharp)} */}
        {/* {featured_media && (
          <Img fixed={featured_media.localFile.childImageSharp.fixed} />
        )} */}
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
  }
`
