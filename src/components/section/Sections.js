import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Section = props => {
  const { allWordpressPage } = useStaticQuery(graphql`
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
    }
  `)
  const about = allWordpressPage.edges.map(about => about.node)
  console.log(about)
  return (
    <React.Fragment>
      <section>aaa</section>
      <section>section1</section>
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
