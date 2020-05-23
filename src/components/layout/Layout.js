import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { body, main, container } from "./layout.module.scss"
import "../global.scss"

const Layout = ({ children }) => {
  return (
    <div className={body}>
      <Header />
      <div className={main}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
