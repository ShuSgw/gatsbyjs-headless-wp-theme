import React from "react"
import SocialBtns from "../socialBtns/SocialBtns"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import {
  styleItems,
  styleNavWrap,
  styleNav,
  hamburger,
  hamburgerIconWrap,
  active,
} from "./nav.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Nav = ({ menuTitle, toggleNav, boolNav }) => {
  const { allWordpressMenusMenusItems } = useStaticQuery(graphql`
    query menuList {
      allWordpressMenusMenusItems {
        edges {
          node {
            slug
            items {
              wordpress_id
              title
              url
              slug
              post_parent
              #child_items {
              #slug
              #title
              #}
            }
          }
        }
      }
    }
  `)

  const menus = allWordpressMenusMenusItems.edges.find(menus => {
    return menus.node.slug === menuTitle
  })
  const items = menus.node.items.map(item => {
    return item
  })

  return (
    <div className={`${styleNavWrap} ${boolNav && active}`}>
      <div className={hamburgerIconWrap}>
        <FontAwesomeIcon
          onClick={() => {
            toggleNav(!boolNav)
          }}
          className={hamburger}
          icon={faTimes}
        />
      </div>
      <div className={styleNav}>
        {items.map((item, key) => (
          <div key={key}>
            <Link
              className={styleItems}
              to={item.slug !== null ? `/${item.slug}` : "/"}
            >
              {item.title}
            </Link>
            {item.child_items && (
              <div>
                {item.child_items &&
                  items.map((childItem, key) => (
                    <div key={key}>
                      <Link
                        className={styleItems}
                        to={
                          childItem.slug !== null ? `/${childItem.slug}` : "/"
                        }
                      >
                        {childItem.title}
                      </Link>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
        <div>
          <Link className={styleItems} to={`/post/`}>
            ブログ
          </Link>
        </div>
        <SocialBtns />
      </div>
    </div>
  )
}

export default Nav
