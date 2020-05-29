import React from "react"
import { btn } from "./btn.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Btn = ({ content, icon }) => {
  return (
    <React.Fragment>
      <a
        href="mailto:info@ranunculus-design.com"
        target="_blank"
        className={btn}
      >
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {content}
      </a>
    </React.Fragment>
  )
}

export default Btn
