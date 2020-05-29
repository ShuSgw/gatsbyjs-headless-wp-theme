import React from "react"
import { postsWrap } from "./thumb..module.scss"

const ThumbWrap = ({ children }) => {
  return <div className={postsWrap}>{children}</div>
}

export default ThumbWrap
