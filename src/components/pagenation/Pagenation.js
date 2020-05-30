import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import {
  pagenationWrap,
  pagenation_nums,
  pagenation_arrow,
  page,
} from "./pagenation.module.scss"
const Pagenation = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const NavLink = props => {
    if (!props.page) {
      return (
        <Link className={pagenation_arrow} to={props.url}>
          <FontAwesomeIcon icon={props.text} />
        </Link>
      )
    } else {
      return <span></span>
    }
  }
  const numsforNations = [0, 1, 2]
  return (
    <React.Fragment>
      <div>
        <div className={page}>
          {index}/{pageCount}
        </div>
      </div>
      <div className={pagenationWrap}>
        <NavLink
          page={first}
          url={"/post/" + previousUrl}
          text={faChevronLeft}
        />
        {numsforNations.map(num => {
          return (
            <Link
              key={num}
              className={pagenation_nums}
              to={`/post/${parseFloat(nextUrl) + num}`}
            >
              {parseFloat(nextUrl) + num}
            </Link>
          )
        })}
        <NavLink page={last} url={"/post/" + nextUrl} text={faChevronRight} />
      </div>
    </React.Fragment>
  )
}

export default Pagenation
