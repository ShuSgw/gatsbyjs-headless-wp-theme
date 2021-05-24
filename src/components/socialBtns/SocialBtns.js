import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import
{
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import
{
  socialBtns,
  socialBtns_wrap,
  socialBtn,
} from "./socialBtns.module.scss"

const SocialBtns = props =>
{
  // const socialIcons = [faInstagram, faFacebookF, faTwitter]
  // const socialIconsLink = ['https://www.instagram.com/fleurichcreations/?hl=ja', 'ff', 'tt']
  const socialIcons = [faInstagram]
  const socialIconsLink = ['https://www.instagram.com/ranunculus.floral.design/']
  return (
    <div className={socialBtns}>
      {socialIcons.map((icon, key) => (
        <a href={socialIconsLink[key]} key={key} className={socialBtns_wrap} target="_blank">
          <FontAwesomeIcon className={socialBtn} icon={icon} />
        </a>
      ))}
    </div>
  )
}

export default SocialBtns
