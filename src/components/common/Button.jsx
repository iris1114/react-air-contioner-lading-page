import styled from "styled-components";
import { device } from "../../utils/device";

const StyledButton = styled.a`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--base-color)" : "var(--white-color)"};
  line-height: 25px;
  padding: 17px 30px;
  text-transform: uppercase;
  color: ${(props) =>
    props.variant === "primary" ? "var(--white-color)" : "var(--black-color)"};
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  font-size: var(--font-s);
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 24px rgb(0 0 0 / 10%);
  display: inline-block;
  z-index: 1;
  margin-right: 20px;

  @media ${device.mobileL}{
    padding: 12px 10px;
    font-size: var(--font-xs);
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    left: -35%;
    top: 0;
    transform: skew(50deg);
    width: 0;
    border-radius: 0;
    background-color: ${(props) =>
      props.variant === "primary"
        ? "var(--base-hover-color)"
        : "rgba(0, 0, 0, 0.1);"};
    z-index: -1;
    transition: 0.3s;
  }

  &:hover{
    &:before {
        width: 160%;
        height: 100%;
    } 
    } 
  }
`;

const Button = ({ text, variant, onButtonClick }) => {
  return (
    <StyledButton
      href="/"
      variant={variant}
      onClick={() => {
        onButtonClick && onButtonClick();
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
