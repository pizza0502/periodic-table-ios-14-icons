import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import PhButton from "../components/phButton"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    pts1: file(relativePath: { eq: "pts-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pts2: file(relativePath: { eq: "pts-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pts3: file(relativePath: { eq: "pts-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Periodic Table Style iOS 14 Icons" />
    <h1 style={{ marginBottom: `1.5rem` }}>
      Periodic Table Style <span className="outline">iOS 14 Icons</span>
    </h1>
    <h3 style={{ marginBottom: `2rem` }}>
      It’s a perfect time to give your iOS 14 home screen a clean and
      ultra-minimalist look.
    </h3>
    <div>
      <a href="https://gum.co/dyUMA" target="_blank" rel="noreferrer noopener">
        {/* <button className="cta-button" style={{ marginBottom: `0.5rem` }}>
          Buy Now – $9 (50%OFF) <span className="slash-price">$18</span>
        </button> */}
        <button className="cta-button" style={{ marginBottom: `0.5rem` }}>
          Buy Now – $18
        </button>
      </a>
    </div>
    <p className="small">
      {/* Black Friday Cyber Monday Sales!
      <br /> */}
      Including free updates forever
    </p>
    <PhButton />
    <div className="cover-image">
      <Img fluid={data.pts1.childImageSharp.fluid} />
    </div>
    <Img fluid={data.pts2.childImageSharp.fluid} className="section-gap" />
    <h2>
      120+ <span className="outline">ultra-minimalist icons</span>
    </h2>
    <Img
      fluid={data.pts3.childImageSharp.fluid}
      style={{ marginBottom: `1.5rem` }}
    />
    <p>and more ideas coming soon!</p>
    <p className="small section-gap">
      Can't find your favourite app or want an alternative version?{" "}
      <a
        href="https://twitter.com/pizza0502"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter DM
      </a>{" "}
      or{" "}
      <a
        href="emailto:pizza0502+icons@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        email me
      </a>{" "}
      and I’ll add it for you!
    </p>
    <h2 style={{ marginBottom: `1rem` }}>
      Changing app icons <span className="outline">on iOS 14</span>
    </h2>
    <p className="small">You don't need jailbreak to change icons in iOS 14.</p>
    <ol className="list">
      <li>
        <h4>
          <span role="img" aria-label="download">
            ⏬
          </span>{" "}
          Download the icon pack
        </h4>
        <p>
          <a
            href="https://gumroad.com/l/dyUMA"
            target="_blank"
            rel="noreferrer noopener"
          >
            Purchase
          </a>{" "}
          the Periodic Table Style icon pack from Gumroad
        </p>
      </li>
      <li>
        <h4>
          <span role="img" aria-label="app shortcut">
            📱
          </span>{" "}
          Create the app shortcuts and add them to your homescreen
        </h4>
        <p>
          Here’s the great{" "}
          <a
            href="https://www.macrumors.com/how-to/change-app-icons/"
            target="_blank"
            rel="noreferrer noopener"
          >
            step-by-step instructions
          </a>{" "}
          to follow through
        </p>
      </li>
      <li>
        <h4>
          <span role="img" aria-label="background image">
            🏞
          </span>{" "}
          Add the bonus wallpaper as your home screen background
        </h4>
        <p>Spice up your home screen even further</p>
      </li>
      <li>
        <h4>
          <span role="img" aria-label="celebrate">
            🎉
          </span>{" "}
          Enjoy your refresh new home screen
        </h4>
        <p>
          Has your iPhone ever looked so clean, minimalist, and beautiful? If
          you like it then share it to your friends!{" "}
          <span role="img" aria-label="thanks">
            🙏
          </span>
        </p>
      </li>
    </ol>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
