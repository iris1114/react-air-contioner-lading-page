import { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../images/header/logo.png";
import logoMenu from "../../images/header/logoMenu.png";
import toggle from "../../images/header/toggle.png";

const StyledHeader = styled.div`
    .header{
        height: 86px;
        display: flex;
        justify-content: space-between;
        align-item: center;
        background-color: var(--white-color);

        &__logo-wraper{
            width: 200px;
            background-color: var(--base-color);
            padding: 12px 20px;
        }

        &__logo{
            width: 130px;
        }

        &__toggle{
            width: 97px;
            border-left: 1px solid var(--line-gray);
        }
    }
`

const StyledMenu = styled.div`
    background-color: var(--white-color);  
    height: 100vh; 
    position: fixed;
    top: 0;
    left: ${(props) => props.variant === "open" ? "0" : "-75%"}; 
    width: 75%;
    transition: 0.5s;
    overflow-y: auto;

    .menu{
        font-family: var(--sub-font);
        position: relative;

        $this: &;
    
        &__logo-wraper{
            width: 150px;
            padding: 30px 15px;
        }

        &__logo{
            width: 150px;
        }

        &__item{
            padding: 12px 15px;
            font-weight: 600;
            border-bottom: 1px solid var(--line-gray);
        }

        &__link{
            color: var(--black-color);

            &:hover{
                color: var(--base-color);
            }
        }

        &__close{
            position: absolute;
            top: 55px;
            right: 50px;
            cursor: pointer;
            width: 24px;
            height: 24px;

            &--line1, &--line2 {
                position: absolute;
                background-color: var(--black-color);
                width: 24px;
                height: 2px;
                opacity: .5;
                transition: 0.3s;
            }

            &--line1{
                transform: rotate(45deg);
            }

            &--line2{
                transform: rotate(135deg);
            }
        }
    }
`

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef= useRef(null);

    const closeMenu = () => {
        setIsOpen(false);
    }

    const openMenu = () => {
       setIsOpen(!isOpen);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
    },[isOpen])

    return(
        <header>
            <StyledHeader className="container">
                <div className="header">
                    <div className="header__logo-wraper">
                        <a href="/" className="header__logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                
                    <div className="header__toggle" onClick={openMenu}>
                        <img src={toggle} alt="toggle" />
                    </div>
                </div>
            </StyledHeader>

            <StyledMenu variant={isOpen ? "open" : "close"} ref={menuRef}>
                <div className="menu">
                    <div className="menu__logo-wraper">
                        <a href="/" className="menu__logo">
                            <img src={logoMenu} alt="logo" />
                        </a>
                    </div>
                
                    <ul className="menu__list">
                        <li className="menu__item"><a className="menu__link" href="/">About</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Service</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Gallery</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Team</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Pricing</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Testimonial</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Blog</a></li>
                        <li className="menu__item"><a className="menu__link" href="/">Contact</a></li>
                    </ul>
                    <div className="menu__close" onClick={closeMenu}>
                        <span className="menu__close--line1"></span>
                        <span className="menu__close--line2"></span>
                    </div>
                </div>
            </StyledMenu> 
        </header>
    );
}


export default MobileHeader;