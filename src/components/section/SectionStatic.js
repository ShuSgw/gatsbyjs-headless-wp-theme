import React from "react"
import Img from "gatsby-image"
import
{
  container,
  thumbPlaceHolder,
  h3_line,
  thumb,
  post_box,
  post_box_single,
  post_box_single_title,
  post_box_single_whitebox,

} from "./sections.module.scss"
import Container from "../container/Container"
import Image from "../image"
import { Link } from "gatsby"


const SectionPost = ({ data, sectionTitle }) =>
{
  return (
    <section id="service">
      <Container>
        <div className="custom_h3">
          <span className={h3_line}>
            {sectionTitle}
          </span>
        </div>
        <div className={post_box}>
          <div className={post_box_single}>
            <div className={thumb}>
              <Image fileName="order.jpg" />
            </div>
            <div className={post_box_single_title}>ORDER</div>
            <p>何気ない１日をお花で特別な日に…</p>
            <ul>
              <li>アレンジメント(フレッシュ,ドライ)</li>
              <li>ブーケ(フレッシュ,ドライ)</li>
              <li>ブートニア/コサージュ</li>
              <li>ヘアアクセ</li>
            </ul>
          </div>
          <div className={post_box_single}>
            <div className={thumb}>
              <Image fileName="lesson.jpg" />
            </div>
            <div className={post_box_single_title}>WORKSHOP</div>
            <p>日常のSpice up、息抜きに…</p>
            <ul>
              <li>季節や花言葉、イベントに合わせて少人数のレッスンを開催中</li>
              <li>レッスン後のコーヒー/紅茶Time有り</li>
              <li>英語でのレッスンorお子さんお預かりについてもお気軽にお尋ねください。</li>
            </ul>
          </div>
          {/* {data.map((data, key) =>
          {
            return (
              <Link
                to={`/post/${data.node.id}`}
                className={post_box_single}
                key={key}
              >
                {data.node.featured_media ? (
                  <div className={thumb}>
                    <Img
                      fluid={
                        data.node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                ) : (
                    <div className={thumbPlaceHolder}>
                      <Image fileName="gatsby-astronaut.png" />
                    </div>
                  )}
                <div className={post_box_single_title}>{data.node.title}</div>
              </Link>
            )
          })} */}
        </div>
        <div className={post_box}>
          <div className={post_box_single}>
            <div className={thumb}>
              <Image fileName="photoshoot.jpg" />
            </div>
            <div className={post_box_single_title}>PHOTOSHOOT</div>
            <p>特別な日をとっておきの1枚の写真に…</p>
            <div className={post_box_single_whitebox}>
              <p>Birthday, Anniversary, Baby shower, Christmas, Halloween, Family photo</p>
            </div>
            <br />
          </div>
          <div className={post_box_single}>
            <div className={thumb}>
              <Image fileName="wedding.jpg" />
            </div>
            <div className={post_box_single_title}>WEDDING</div>
            <p>心に残る2人だけのOriginally溢れる空間に…</p>
            <div className={post_box_single_whitebox}>
              <p>カップルご両人楽しめる結婚式のために、お2人の物語をお聞かせください。2人の物語を形にいたします。</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionPost
