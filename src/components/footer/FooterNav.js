import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { footerNav, footerNav_items_item } from "./footer.module.scss"

const FooterNav = ({ menuTitle }) => {
  const { allWordpressMenusMenusItems } = useStaticQuery(graphql`
    query menuListForFooter {
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
    <div className={footerNav}>
      <ul>
        {items.map((item, key) => (
          <li key={key} className={footerNav_items_item}>
            <Link to={item.slug !== null ? `/${item.slug}` : "/"}>
              {item.title}
            </Link>
            {item.child_items && (
              <ul>
                {item.child_items &&
                  items.map((childItem, key) => (
                    <li key={key}>
                      <Link
                        to={
                          childItem.slug !== null ? `/${childItem.slug}` : "/"
                        }
                      >
                        {childItem.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
        <li className={footerNav_items_item}>
          <Link to={`/post/`}>ブログ</Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterNav
