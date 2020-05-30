import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { footerNav, footerNav_items_item } from "./footer.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
      <div>
        {items.map((item, key) => (
          <div key={key} className={footerNav_items_item}>
            <Link to={item.slug !== null ? `/${item.slug}` : "/"}>
              {item.title}
            </Link>
            {item.child_items && (
              <div>
                {item.child_items &&
                  items.map((childItem, key) => (
                    <div key={key}>
                      <Link
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
        <div className={footerNav_items_item}>
          <AnchorLink href="#link1" offset="0">
            ブログ
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
