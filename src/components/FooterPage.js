import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import styled from "styled-components";

export default class FooterPage extends Component {
  getSocialLinks() {
    return [
      {
        href: "https://github.com/",
        title: "My Github",
        icon: "fab fa-github-alt",
        class: "brand-github"
      },
      {
        href: "https://www.linkedin.com/",
        title: "My LinkedIn",
        icon: "fab fa-linkedin-in",
        class: "brand-linkedin"
      }
    ];
  }

  render() {
    const socialLinks = this.getSocialLinks();
    return (
      <SocialLinkWrapper>
        <Footer size="mini">
          <FooterSection type="left" logo="Title">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="right">
            <FooterLinkList>
              <div className={`social-links-container`}>
                <div className="social-links">
                  {socialLinks.map((data, index) => {
                    return (
                      <div className="link-container" key={index}>
                        <a
                          href={data.href}
                          className={data.class}
                          title={data.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={data.icon} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </SocialLinkWrapper>
    );
  }
}

const SocialLinkWrapper = styled.div`
  .social-links-container {
    .social-links {
      display: flex;
      justify-content: flex-end;
      background-color: $dark-gray;
      padding: 10px;
      .link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 0;
        font-size: 35px;
        padding: 0 15px;

        a {
          color: rgba($dark-gray, 0.75);
        }
      }
    }
  }
`;
