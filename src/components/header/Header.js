// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import Nav from "../nav/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { closing, fontAwesomeWrap, logoImgWrap } from "./header.module.scss"

import Image from "../Image"

const Header = props => {
  const [boolNav, toggleNav] = useState(false)
  return (
    <header>
      <div>
        <div className={fontAwesomeWrap}>
          <FontAwesomeIcon
            className={closing}
            onClick={() => {
              toggleNav(!boolNav)
            }}
            icon={faBars}
          />
        </div>
        <div className={logoImgWrap}>
          <Image name={"logo.png"} />
        </div>
        <Nav menuTitle={"main"} toggleNav={toggleNav} boolNav={boolNav} />
      </div>
    </header>
  )
}

export default Header
