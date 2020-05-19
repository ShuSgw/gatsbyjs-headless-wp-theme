import React from "react"
// import styles from "./nav.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Nav = ({ menuTitle }) => {
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
    <ul>
      {items.map((item, key) => (
        <li key={key}>
          <Link to={item.slug !== null ? `/${item.slug}` : "/"}>
            {item.title}
          </Link>
          {item.child_items && (
            <ul>
              {item.child_items &&
                items.map((childItem, key) => (
                  <li key={key}>
                    <Link
                      to={childItem.slug !== null ? `/${childItem.slug}` : "/"}
                    >
                      {childItem.title}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Nav
