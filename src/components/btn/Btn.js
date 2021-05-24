import React from "react"
import { btn } from "./btn.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Btn = ({ content, icon, forWhat }) =>
{
  return (
    <React.Fragment>
      <a
        href={forWhat}
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
