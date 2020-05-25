import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  h3_line,
  about_box,
  about_box_single,
  about_img,
} from "./sections.module.scss"

import Image from "../image"
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
            id
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
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
            id
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
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
      {console.log(casesData)}
      <section>
        <div className={container}>
          <div className={about_box}>
            <div className={about_box_single}>
              <h3>
                <span className={h3_line}>About</span>
              </h3>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </div>
            <div className={about_box_single}>
              <div className={about_img}>
                <Image fileName="top_about_section.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionPost sectionTitle="事例集" data={casesData} />
      <SectionPost sectionTitle="ブログ" data={blogData} />
    </React.Fragment>
  )
}

export default Section
