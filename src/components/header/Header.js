// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import Nav from "../nav/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  closing,
  closingIconWrap,
  logoImgWrap,
  headerContentsWrap,
  container,
} from "./header.module.scss"

import Image from "../Image"

const Header = props => {
  const [boolNav, toggleNav] = useState(false)
  return (
    <header>
      <div className={container}>
        <div className={headerContentsWrap}>
          {/* display:none on ↓ desktop */}
          <div className={closingIconWrap}>
            <FontAwesomeIcon
              className={closing}
              onClick={() => {
                toggleNav(!boolNav)
              }}
              icon={faBars}
            />
          </div>

          <div className={logoImgWrap}>
            <Link to={`/`}>
              <Image fileName="logo.png" alt="logo" name={"logo.png"} />
            </Link>
          </div>

          <Nav menuTitle={"main"} toggleNav={toggleNav} boolNav={boolNav} />
        </div>
      </div>
    </header>
  )
}

export default Header
