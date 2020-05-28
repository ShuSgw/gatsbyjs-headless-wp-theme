import React from "react"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container/Container"

const postList = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext

  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const NavLink = props => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{props.text}は存在しません</span>
    }
  }
  return (
    <Layout>
      <h3>Blog</h3>
      <Container>
        <div>
          {group.map((each, id) => {
            return (
              <li key={id}>
                <Link key={id} to={`/post/${each.node.id}`}>
                  {each.node.title}
                  <br />
                  {each.node.featured_media ? (
                    <Img
                      fluid={
                        each.node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            )
          })}
          <div>
            <h4>
              {index}/{pageCount}
            </h4>
          </div>

          <div className="previousLink">
            <NavLink
              test={first}
              url={"/post/" + previousUrl}
              text="前のページ"
            />
          </div>
          <div className="nextLink">
            <NavLink test={last} url={"/post/" + nextUrl} text="次のページ" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default postList
