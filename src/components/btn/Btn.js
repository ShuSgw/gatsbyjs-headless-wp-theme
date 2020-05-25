import React from "react"
import { btn } from "./btn.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Btn = ({ content, icon }) => {
  return (
    <React.Fragment>
      <div className={btn}>
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {content}
      </div>
    </React.Fragment>
  )
}

export default Btn
