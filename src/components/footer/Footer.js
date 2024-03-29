import React from "react"
import Btn from "../btn/Btn"
import SocialBtns from "../socialBtns/SocialBtns"
import
{
  container,
  footer,
  footer_box,
  footer_box_single,
  copyright,
  footer_box_single_title,
} from "./footer.module.scss"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import FooterNav from "./FooterNav"
import Container from "../container/Container"
import
{
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = ({ menuTitle, toggleNav, boolNav }) =>
{
  return (
    <footer id="contact" className={footer}>
      <Container>
        <div className={footer_box}>
          <div className={footer_box_single}>
            <div className={footer_box_single_title}>
              お見積り、ご相談
              <br />
              お問い合わせはこちらまで
            </div>
            <p>営業時間：11:00 - 22:00</p>
            <Btn forWhat={"mailto:info@ranunculus-design.com"} icon={faEnvelope} content="info@ranunculus-design.com" />
            <Btn forWhat={"https://www.instagram.com/ranunculus.floral.design/"} icon={faInstagram} content="Instagram" />
            <Btn forWhat={"tel:080-3978-1520"} icon={faPhone} content="080-3978-1520" />

            {/* <SocialBtns /> */}
          </div>
          <div className={footer_box_single}>
            <FooterNav menuTitle={"main"} />
          </div>
        </div>
        <small className={copyright}>© Copyright 2020 Ranunculus Design</small>
      </Container>
    </footer>
  )
}

export default Footer
