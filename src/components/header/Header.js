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
  header,
} from "./header.module.scss"

import { Helmet } from "react-helmet"

import Container from "../container/Container"
import Image from "../Image"

const Header = props => {
  const [boolNav, toggleNav] = useState(false)
  return (
    <header className={header}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ranunculus Design</title>
      </Helmet>
      <Container>
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
              <Image fileName="_logo.png" alt="logo" name={"logo.png"} />
            </Link>
          </div>

          <Nav menuTitle={"main"} toggleNav={toggleNav} boolNav={boolNav} />
        </div>
      </Container>
    </header>
  )
}

export default Header
