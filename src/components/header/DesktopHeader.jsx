import logo from "../../images/header/logo.png";
import styled from "styled-components";


const StyledHeader = styled`
    display: flex;
`

const StyledLogo = styled`
    
`

const StyledMenu = styled`
`

const StyledInfo = styled`
`

const StyledNav = styled`
`

const DesktopHeader = () => {
    return (
        <header>
            <StyledHeader className="header container">
            
                <StyledLogo>
                    <div className="header__logo-wraper">
                        <a href="/" className="header__logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </StyledLogo>

                <StyledMenu>
                    <StyledInfo></StyledInfo>
                    <StyledNav></StyledNav>
                </StyledMenu>
          

           
            </StyledHeader>
        </header>
    )
}

export default DesktopHeader;