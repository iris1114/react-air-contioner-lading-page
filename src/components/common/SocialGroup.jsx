import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const StyledSocialGroup = styled.div`
  .icon {
    width: 30px;
    height: 30px;
    background: var(--base-color);
    color: var(--white-color);
    border-radius: 50%;
    padding: 15px;
    line-height: 40px;
    margin-right: 10px;

    svg {
      vertical-align: middle;
    }

    &:hover {
      background: var(--base-hover-color);
    }
  }
`;

const SocialGroup = () => {
  return (
    <StyledSocialGroup>
      <span className="icon">
        <FaFacebook />
      </span>
      <span className="icon">
        <FaTwitter />
      </span>
      <span className="icon">
        <FaInstagram />
      </span>
    </StyledSocialGroup>
  );
};

export default SocialGroup;
