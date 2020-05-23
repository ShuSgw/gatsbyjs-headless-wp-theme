import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { container } from "./sections.module.scss"
const Section = props => {
  const { allWordpressPage, allWordpressPost } = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "front-page" } }) {
        edges {
          node {
            id
            title
            content
          }
        }
      }
      allWordpressPost(
        filter: { categories: { elemMatch: { slug: { eq: "uncategorized" } } } }
        limit: 2
      ) {
        edges {
          node {
            title
            featured_media {
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const about = allWordpressPage.edges[0].node
  const casesData = allWordpressPost.edges
  return (
    <React.Fragment>
      <section>
        <div className={container}>
          <h3>{about.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      </section>
      <section>
        <div className={container}>
          {casesData.map((casesData, key) => {
            return (
              <div key={key}>
                <h4>{casesData.node.title}</h4>
                {casesData.node.featured_media ? (
                  <Img
                    fixed={
                      casesData.node.featured_media.localFile.childImageSharp
                        .fixed
                    }
                  />
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section

// allWordpressPage(filter: {slug: {eq: "sample-page"}}) {
//   edges {
//     node {
//       id
//     }
//   }
// }
