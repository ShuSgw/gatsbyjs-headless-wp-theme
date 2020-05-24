import React from "react"
import { container } from "./footer.module.scss"
const Footer = props => {
  return (
    <footer>
      <div className={container}>
        <h3>
          お見積り、ご相談
          <br />
          お問い合わせはこちらまで
        </h3>
      </div>
    </footer>
  )
}

export default Footer
