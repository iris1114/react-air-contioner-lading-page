import styled from "styled-components";
import { device } from "../../utils/device";

const StyledTitle = styled.h2`
    font-size: var(--font-xl);
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;
    font-family: var(--title-font);
    line-height: var(--font-2xl);

    @media ${device.tablet} {
        font-size: var(--font-l);
    }
       
    .black{
        color: var(--black-color);
    }

    .yellow{
        color: var(--base-color);
    }

    .white{
        color: var(--white-color);
      
    }
`

const Title = ({ blackText, yellowText, otherBlackText, whiteText }) => {
    return (
      <StyledTitle>
        <span className="black">{blackText}</span>
        <span className="yellow">{yellowText}</span>
        <span className="black">{otherBlackText}</span>
        <span className="white">{whiteText}</span>
      </StyledTitle>
    );
  };
  
  export default Title;
  