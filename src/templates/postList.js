import React from "react"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"
import Container from "../components/container/Container"

import Thumb from "../components/thumb/Thumb"
import ThumbWrap from "../components/thumb/ThumbWrap"
import OtherHeros_placeholder from "../components/hero-header/OtherHeros_placeholder"

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
      <OtherHeros_placeholder title="Blog" />
      <Container>
        <div>
          <ThumbWrap>
            {group.map((each, id) => {
              return <Thumb key={id} eachPost={each} />
            })}
          </ThumbWrap>
          <div>
            <div>
              {index}/{pageCount}
            </div>
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
