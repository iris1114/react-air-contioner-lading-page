import styled from "styled-components";

import logo from "../../images/header/logoMenu.png";
import { device } from "../../utils/device";
import Button from "../common/Button";
import Input from "../common/Input";
import SocialGroup from "../common/SocialGroup";

const StyledFooter = styled.footer`
  margin-top: 100px;
  background-color: var(--footer-bg);

  .footer {
    padding: 100px 0px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    &__left {
      display: flex;
      flex-wrap: wrap;
      &-list {
        @media ${device.tablet} {
          text-align: center;
          margin-bottom: 50px;
        }
        .title {
          margin-bottom: 20px;
          font-family: var(--title-font);
          font-size: var(--font-2m);
          font-weight: 700;
          color: var(--black-color);
        }

        ul {
          li {
            margin-bottom: 10px;

            a {
              color: var(--font-color);

              &:hover {
                color: var(--base-color);
              }
            }
          }
        }
      }
    }

    &__right {
      @media ${device.laptop} {
        margin-top: 50px;
      }
      @media ${device.tablet} {
        text-align: center;
      }
      &-subscribe {
        .text {
          font-family: var(--title-font);
          font-size: var(--font-2m);
          margin-bottom: 20px;
        }
        .inputs {
          display: flex;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;

          input {
            margin-top: 0px;
          }

          .col-lg-7{
            padding 0px;
          }

          .btn {
            margin-left: 20px;
            padding: 0px;

            @media ${device.tablet} {
              margin-top: 20px;
              margin-left: 0px;
            }

            a{
              @media ${device.tablet} {
                width: 100%;
                margin-right: 0px;
              }
            }

           

          }
        }
        .note {
          opacity: 0.5;
          font-size: var(--font-s);
        }
      }
    }

    &__bottom{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 50px;
      border-top: 1px solid var(--line-gray);
      padding-top: 50px;

      @media ${device.tablet} {
       text-align: center;
      }

      &-social{
        @media ${device.tablet} {
          margin-top: 20px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer container">
        <div className="footer__left col-lg-6 col-md-12 col-12">
          <div className="footer__left-list col-lg-4 col-md-4 col-12">
            <div className="title">Solutions</div>
            <ul>
              <li>
                <a href="/">Industry News</a>
              </li>
              <li>
                <a href="/">Projects in Development</a>
              </li>
              <li>
                <a href="/">Completed Projects</a>
              </li>
              <li>
                <a href="/">Facilities</a>
              </li>
            </ul>
          </div>
          <div className="footer__left-list col-lg-4 col-md-4 col-12">
            <div className="title">Company</div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="footer__left-list col-lg-4 col-md-4 col-12">
            <div className="title">Legal</div>
            <ul>
              <li>
                <a href="/">Cliam</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__right col-lg-6 col-md-12 col-12">
          <div className="footer__right-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__right-subscribe">
            <div className="text">Subscribe To Our Newsletter</div>
            <div className="inputs">
              <div className="col-lg-7 col-md-7 col-12">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  id="email"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12 btn">
                <Button variant="primary" text="submit" />
              </div>
            </div>
            <div className="note">* Nulla porttitor accumsan tincidunt.</div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-copyright col-lg-9  col-md-9 col-12">
            © Core Project - 2021
          </div>
          <div className="footer__bottom-social col-lg-3 col-md-3 col-12">
            <SocialGroup />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
