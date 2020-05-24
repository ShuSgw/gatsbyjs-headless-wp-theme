import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { container, h3_line } from "./sections.module.scss"

import SectionPost from "./SectionPost"

const Section = props => {
  const { allWordpressPage, post1, post2 } = useStaticQuery(graphql`
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
      post1: allWordpressPost(
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
      post2: allWordpressPost(
        filter: { categories: { elemMatch: { slug: { eq: "asahi" } } } }
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
  const casesData = post1.edges
  const blogData = post2.edges

  return (
    <React.Fragment>
      <section>
        <div className={container}>
          <h3>
            <span className={h3_line}>About</span>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      </section>
      <SectionPost sectionTitle="事例集" data={casesData} />
      <SectionPost sectionTitle="ブログ" data={blogData} />
    </React.Fragment>
  )
}

export default Section
