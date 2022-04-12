import { useEffect, useRef, useState } from "react";

import logo from "../../images/header/logo.png";
import logoMenu from "../../images/header/logoMenu.png";
import toggle from "../../images/header/toggle.png";
import styled from "styled-components";

import { FaSearch, FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaGoogle } from "react-icons/fa";
import { device } from "../../utils/device";

const StyledHeader = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0px 15px;
  position: fixed;
  top: 0px;
  z-index: 2;
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
`;

const StyledLogo = styled.div`
  .header__logo-wraper {
    width: 300px;
    background-color: var(--base-color);
    padding: 44px 20px;
    text-align: center;

    @media ${device.laptop} {
      width: 200px;
      padding: 7.5px 20px;
    }
  }

  .header__logo {
    width: 130px;
  }
`;

const StyledMenu = styled.div`
  margin-left: auto;
  width: 100%;
`;

const StyledInfo = styled.div`
  .info {
    display: flex;
    justify-content: space-between;
    background-color: var(--base-color);
    line-height: 42px;
    padding-left: 40px;
    color: var(--white-color);

    @media ${device.laptop} {
      display: none;
    }

    &__text {
      display: flex;
      font-size: var(--font-s);

      &-first {
        margin-right: 20px;
      }

      li:hover {
        cursor: pointer;
        color: var(--base-hover-color);
      }
    }
    &__social {
      display: flex;
      align-items: center;

      .icon {
        cursor: pointer;
        width: 42px;
        height: 42px;
        text-align: center;

        svg {
          vertical-align: middle;
        }

        &:hover {
          background-color: var(--base-hover-color);
        }
      }
    }
  }
`;

const StyledNav = styled.div`
  .nav {
    display: flex;
    background-color: var(--white-color);
    align-items: center;

    &__list {
      display: flex;

      @media ${device.laptop} {
        display: none;
      }
    }

    &__item {
      line-height: 85px;
      padding: 0px 14px;
      font-size: 14px;
    }

    &__link {
      text-transform: uppercase;
      color: var(--black-color);

      &:hover {
        color: var(--base-color);
      }
    }

    &__btn {
      display: flex;
      margin-left: auto;
      cursor: pointer;
    }

    &__search {
      width: 80px;
      height: 85px;
      line-height: 85px;
      text-align: center;
      border-left: 1px solid var(--line-gray);
      border-right: 1px solid var(--line-gray);
      font-size: 18px;
      font-weight: 300;

      @media ${device.laptopM} {
        display: none;
      }
    }

    &__toggle {
      width: 97px;

      img {
        width: 100%;
      }

      @media ${device.laptopM} {
        display: none;
      }

      @media ${device.laptop} {
        display: block;
        border-left: 1px solid var(--line-gray);
      }
    }
  }
`;

const StyledAsideMenu = styled.div`
  background-color: var(--white-color);
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.variant === "open" ? "0" : "-75%")};
  width: 75%;
  transition: 0.5s;
  overflow-y: auto;

  .menu {
    position: relative;

    &__logo-wraper {
      width: 150px;
      padding: 30px 15px;
    }

    &__logo {
      width: 150px;
    }

    &__item {
      padding: 12px 15px;
      font-weight: 600;
      border-bottom: 1px solid var(--line-gray);
    }

    &__link {
      color: var(--black-color);

      &:hover {
        color: var(--base-color);
      }
    }

    &__close {
      position: absolute;
      top: 55px;
      right: 50px;
      cursor: pointer;
      width: 24px;
      height: 24px;

      &--line1,
      &--line2 {
        position: absolute;
        background-color: var(--black-color);
        width: 24px;
        height: 2px;
        opacity: 0.5;
        transition: 0.3s;
      }

      &--line1 {
        transform: rotate(45deg);
      }

      &--line2 {
        transform: rotate(135deg);
      }

      &:hover .menu__close-line1 {
        transform: rotate(0deg);
      }
      &:hover .menu__close-line2 {
        transform: rotate(180deg);
      }
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const openMobileMenu = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !toggleRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <StyledHeader className="header">
        <StyledLogo>
          <div className="header__logo-wraper">
            <a href="/" className="header__logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </StyledLogo>

        <StyledMenu>
          <StyledInfo>
            <div className="info">
              <ul className="info__text">
                <li className="info__text-first">info@website.com</li>
                <li>098 098 987 89</li>
              </ul>
              <div className="info__social">
                <div className="icon">
                  <FaFacebookF />
                </div>
                <div className="icon">
                  <FaTwitter />
                </div>
                <div className="icon">
                  <FaInstagram />
                </div>
                <div className="icon">
                  <FaLinkedinIn />
                </div>
                <div className="icon">
                  <FaGoogle />
                </div>
              </div>
            </div>
          </StyledInfo>
          <StyledNav>
            <div className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Service
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Gallery
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Team
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Pricing
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Testimonial
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Blog
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="nav__btn">
                <div className="nav__search">
                  <FaSearch />
                </div>

                <div className="nav__toggle" onClick={openMobileMenu}>
                  <img src={toggle} alt="toggle" ref={toggleRef} />
                </div>
              </div>
            </div>
          </StyledNav>
        </StyledMenu>

        <StyledAsideMenu variant={isOpen ? "open" : "close"} ref={menuRef}>
          <div className="menu">
            <div className="menu__logo-wraper">
              <a href="/" className="menu__logo">
                <img src={logoMenu} alt="logo" />
              </a>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/" className="menu__link">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Service
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Gallery
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Team
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Pricing
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Testimonial
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Blog
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="menu__close" onClick={closeMobileMenu}>
              <span className="menu__close-line1"></span>
              <span className="menu__close-line2"></span>
            </div>
          </div>
        </StyledAsideMenu>
      </StyledHeader>
    </header>
  );
};

export default Header;
