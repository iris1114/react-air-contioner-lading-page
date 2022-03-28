import styled from "styled-components";
import logo from "../../images/header/logo.png";
import logoMenu from "../../images/header/logoMenu.png";
import toggle from "../../images/header/toggle.png";

const StyledNav = styled.div`
    .nav{
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
    left: 0; 
    width: 75%;

    .menu{
        font-family: var(--sub-font);
        position: relative;
    
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
        }

        &__close{
            position: absolute;
            top: 10px;
            right: 10px;

            &--line1, &--line2 {
                position: absolute;
                background-color: var(--black-color);
                width: 24px;
                height: 2px;
                opacity: .5;
                transition: .3s;
            
            }
        }
    }
`


const Header = () => {
    return(
        <header>
            <StyledNav className="container">
                <nav className="nav">
                    <div className="nav__logo-wraper">
                        <a href="#" className="nav__logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                
                    <div className="nav__toggle">
                        <img src={toggle} alt="toggle" />
                    </div>
                </nav>
            </StyledNav>

            <StyledMenu>
                <div className="menu">
                    <div className="menu__logo-wraper">
                        <a href="#" className="menu__logo">
                            <img src={logoMenu} alt="logo" />
                        </a>
                    </div>
                  
                    <ul className="menu__list">
                        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Service</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Gallery</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Pricing</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Testimonial</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Blog</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
                    </ul>
                    <div className="menu__close">
                        <span className="menu__close--line1"></span>
                        <span className="menu__close--line2"></span>
                    </div>
                </div>
            </StyledMenu>

            
        </header>
    );
}


export default Header;