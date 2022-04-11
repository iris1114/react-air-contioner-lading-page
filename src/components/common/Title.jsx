import styled from "styled-components";
import { device } from "../../utils/device";

const StyledTitle = styled.h2`
    font-size: var(--font-xl);
    font-weight: 700;
    margin-bottom: 20px;

    @media ${device.tablet} {
        font-size: var(--font-l);
    }
       
    .black{
        color: var(--black-color);
    }

    .yellow{
        color: var(--base-color);
    }
`

const Title = ({ blackText, yellowText, otherBlackText }) => {
    return (
      <StyledTitle>
        <span className="black">{blackText}</span>
        <span className="yellow">{yellowText}</span>
        <span className="black">{otherBlackText}</span>
      </StyledTitle>
    );
  };
  
  export default Title;
  