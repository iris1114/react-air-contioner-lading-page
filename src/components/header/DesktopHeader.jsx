import logo from "../../images/header/logo.png";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import toggle from "../../images/header/toggle.png";



const StyledHeader = styled.section`
    display: flex;
    justify-content: venter;
    margin: auto;
    padding: 0px 15px;
`

const StyledLogo = styled.div`
    .header__logo-wraper{
        width: 300px;
        background-color: var(--base-color);
        padding: 44px 20px;
        text-align: center;
    }
    
`

const StyledMenu = styled.div`
    margin-left: auto;
    width: 100%;
    
`

const StyledInfo = styled.div`
    .info{
        display: flex;
        justify-content: space-between;
        background-color: var(--base-color);
        line-height: 42px;
        padding-left: 40px;
        color: var(--white-color);

        &__text{
            display: flex; 

            &--first{
                margin-right: 20px;
            }
        }
        &__social{
            .icon{
                margin-right: 20px;
            }
        }
    }
`

const StyledNav = styled.div`
    .nav{
        display: flex;  
        background-color: var(--white-color);
        align-items: center;

        &__list{
            display: flex; 
        }

        &__item{
            line-height: 85px;
            padding: 0px 14px;
            font-size: 14px;
            
        }

        &__link{
            text-transform: uppercase;
            color: var(--black-color);
        }

        &__btn{
            display: flex;
            margin-left: auto;
        }

        &__search{
            width: 80px;
            height:  85px;
            line-height: 85px;
            text-align: center;
            border-left: 1px solid var(--line-gray);
            border-right: 1px solid var(--line-gray);
            font-size: 18px;
            font-weight: 300;
        }

        &__toggle{
            width: 97px;
        }
    }
`

const DesktopHeader = () => {
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
                            <div className="info__text">
                                <div className="info__text--first">info@website.com</div>
                                <div>098 098 987 89</div>
                            </div>
                            <div className="info__social">
                                <FaFacebookF  className="icon"/>
                                <FaTwitter className="icon"/>
                                <FaInstagram className="icon"/>
                                <FaLinkedinIn className="icon"/>
                                <FaGoogle className="icon"/>
                            </div>
                        </div>
                    </StyledInfo>
                    <StyledNav>
                        <div className="nav">
                            <ul className="nav__list">
                                <li className="nav__item"><a href="/" className="nav__link">About</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Service</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Gallery</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Team</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Pricing</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Testimonial</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Blog</a></li>
                                <li className="nav__item"><a href="/" className="nav__link">Contact</a></li>
                            </ul>

                            <div className="nav__btn">
                                <div className="nav__search">
                                    <FaSearch />
                                </div>
                                
                                <div className="nav__toggle">
                                    <img src={toggle} alt="toggle" />
                                </div>
                            </div>
                        </div>
                    </StyledNav>
                </StyledMenu>
        
            </StyledHeader>
        </header>
    )
}

export default DesktopHeader;