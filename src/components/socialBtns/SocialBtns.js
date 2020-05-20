import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import {
  socialBtns,
  socialBtns_wrap,
  socialBtn,
} from "./socialBtns.module.scss"

const SocialBtns = props => {
  const socialIcons = [faFacebookF, faTwitter, faInstagram]
  return (
    <div className={socialBtns}>
      {socialIcons.map((icon, key) => (
        <div key={key} className={socialBtns_wrap}>
          <FontAwesomeIcon className={socialBtn} icon={icon} />
        </div>
      ))}
    </div>
  )
}

export default SocialBtns
