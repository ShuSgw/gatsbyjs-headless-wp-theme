import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  h3_line,
  about_box,
  about_title,
  about_box_single,
  about_img,
  about_link,
} from "./sections.module.scss"

import Image from "../image"
import SectionPost from "./SectionPost"

import Container from "../container/Container"

const Section = props => {
  const { allWordpressPage, post1, post2 } = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "front-page" } }) {
        edges {
          node {
            id
            title
            content
            slug
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
      {/* about */}
      <section>
        <Container>
          <div className={about_box}>
            <div className={about_box_single}>
              <div className={`${about_title} custom_h3`}>
                <span className={h3_line}>About</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
              <Link className={about_link} to={about.slug}>
                もっと見る
              </Link>
            </div>
            <div className={about_box_single}>
              <div className={about_img}>
                <Image fileName="top_about_section.png" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* about end */}
      <SectionPost sectionTitle="事例集" data={casesData} />
      <SectionPost sectionTitle="ブログ" data={blogData} />
    </React.Fragment>
  )
}

export default Section
