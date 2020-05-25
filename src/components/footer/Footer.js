import React from "react"
import Btn from "../btn/Btn"
import SocialBtns from "../socialBtns/SocialBtns"
import {
  container,
  footer,
  footer_box,
  footer_box_single,
  copyright,
} from "./footer.module.scss"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import FooterNav from "./FooterNav"

const Footer = ({ menuTitle, toggleNav, boolNav }) => {
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={footer_box}>
          <div className={footer_box_single}>
            <h3>
              お見積り、ご相談
              <br />
              お問い合わせはこちらまで
            </h3>
            <p>営業時間：11:00 - 22:00</p>
            <Btn icon={faEnvelope} content="info@ranunculus-design.com" />
            <Btn icon={faPhone} content="info@ranunculus-design.com" />
            <SocialBtns />
          </div>
          <div className={footer_box_single}>
            <FooterNav menuTitle={"main"} />
          </div>
        </div>
        <small className={copyright}>© Copyright 2020 Ranunculus Design</small>
      </div>
    </footer>
  )
}

export default Footer
