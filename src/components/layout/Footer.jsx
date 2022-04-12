
import styled from "styled-components";

const StyledFooter = styled.footer`
   
`

const Footer = () => {
    return (
      <StyledFooter>
          <div className="footer container">
            <div className="footer__left">
              <div className="footer__left-list">
                  <div className="title">Solutions</div>
                  <ul>
                    <li>Industry News</li>
                    <li>Projects in Development</li>
                    <li>Completed Projects</li>
                    <li>Facilities</li>
                  </ul>
              </div>
              <div className="footer__left-list">
                  <div className="title">Company</div>
                  <ul>
                    <li>Industry News</li>
                    <li>Projects in Development</li>
                    <li>Completed Projects</li>
                    <li>Facilities</li>
                  </ul>
              </div>
              <div className="footer__left-list">
                  <div className="title">Legal</div>
                  <ul>
                    <li>Industry News</li>
                    <li>Projects in Development</li>
                    <li>Completed Projects</li>
                    <li>Facilities</li>
                  </ul>
              </div>
            </div>

          </div>
      </StyledFooter>
    );
  };
  
  export default Footer;
  