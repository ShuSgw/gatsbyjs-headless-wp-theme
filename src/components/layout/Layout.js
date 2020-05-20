import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { body, main } from "./layout.module.scss"
import "../global.scss"

const Layout = ({ children }) => {
  return (
    <div className={body}>
      <Header />
      <div className={main}>
        <div>{children}</div>
        <p>hello</p>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
