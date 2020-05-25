import React from "react"
import { container } from "./container.module.scss"

const Container = ({ children }) => {
  return <div class={container}>{children}</div>
}

export default Container
