import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import
{
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
import SectionStatic from "./SectionStatic"


import Container from "../container/Container"

const Section = props =>
{
  const {
    allWordpressPage,
    post1,
    post2,
    simple_description,
  } = useStaticQuery(graphql`
    query {
      allWordpressPage(filter: { slug: { eq: "front-page" } }) {
        edges {
          node {
            id
            title
            content
            slug
            acf {
              simple_description
            }
          }
        }
      }
      post1: allWordpressPost(
        filter: { categories: { elemMatch: { slug: { eq: "blog" } } } }
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
        filter: { categories: { elemMatch: { slug: { eq: "cases" } } } }
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
          <div id="about" className={about_box}>
            <div className={about_box_single}>
              <div className={`${about_title} custom_h3`}>
                <span className={h3_line}>About</span>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: about.content }} /> */}
              {/* <div>{about.acf.simple_description}</div> */}
              <div>
                人生節目の日をその1日だけで終わるのでなく、あなたの原点としていつまでも心の中に輝き続けられるように…この先辛いことや悲しいことがあっても、この日を想い返してまた笑顔になれるような特別な宝物になる1日を一緒に作りましょう。
                Ranunculus Designはクライアントの皆様との対話を重視しております。
                お2人の軌跡をお聞かせください。
              </div>
              {/* <Link className={about_link} to={about.slug}>
                もっと見る
              </Link> */}
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
      {/* <SectionPost sectionTitle="Blog" data={casesData} />
      <SectionPost sectionTitle="Case Studies" data={blogData} /> */}
      <SectionStatic sectionTitle="Services" />
    </React.Fragment>
  )
}

export default Section
