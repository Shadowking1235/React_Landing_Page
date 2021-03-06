import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import logoWhite from "../images/logo-white.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

export const FooterStyled = styled.div`
  background: var(--very-dark-violet);
  margin-bottom: 0px;
  .content {
    display: grid;
  }

  .group-detail {
    text-align: center;
    font-family: "poppins";
    color: var(--gray);
    font-size: 0.8em;
  }

  .detail-title {
    color: white;
    line-height: 3em;
  }

  .detail-element {
    line-height: 1.2em;
    cursor: pointer;
  }

  .detail-element:hover {
    color: var(--cyan);
  }
  .logo {
    text-align: center;
    padding: 3em 0em 1em 0em;
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 5em;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .social-link img:hover {
    fill: var(--cyan);
  }

  @media (min-width: 1200px) {
    padding-bottom: 3em;

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 3fr 1.5fr;
    }

    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 1.5em;
    }

    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .detail-title {
      text-align: left;
      font-size: 1.1em;
    }

    .detail-element {
      text-align: left;
    }
    .social-links {
      display: flex;
      align-items: flex-start;
      padding: 3em 2em;
      justify-content: space-between;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer-grid">
          <div className="logo">
            <img src={logoWhite} alt="logo-white" />
          </div>
          <div className="content">
            <div className="group-detail">
              <p className="detail-title">
                <strong>Features</strong>
              </p>
              <p className="detail-element">Link Shortening</p>
              <p className="detail-element">Branded Links</p>
              <p className="detail-element">Analytics</p>
            </div>
            <div className="group-detail">
              <p className="detail-title">
                <strong>Resources</strong>
              </p>
              <p className="detail-element">Blog</p>
              <p className="detail-element">Developers</p>
              <p className="detail-element">Suport</p>
            </div>
            <div className="group-detail">
              <p className="detail-title">
                <strong>Company</strong>
              </p>
              <p className="detail-element">About</p>
              <p className="detail-element">Our Team</p>
              <p className="detail-element">Careers</p>
              <p className="detail-element">Contact</p>
            </div>
          </div>
          <div className="social-links">
            <span className="social-link">
              <img src={iconFacebook} alt="icon-facebook" />
            </span>
            <span className="social-link">
              <img src={iconTwitter} alt="icon-twitter" />
            </span>
            <span className="social-link">
              <img src={iconPinterest} alt="icon-pinterest" />
            </span>
            <span className="social-link">
              <img src={iconInstagram} alt="icon-instagram" />
            </span>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  );
}

export default Footer;
