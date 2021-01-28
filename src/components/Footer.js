import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      website: file(relativePath: { eq: "globe.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://subeidaahmed.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.website.publicURL} alt="Website logo" />
          </a>

        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          © 2021 Company. All right reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
