import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const StyledTeamCard = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  position: relative;

  .card {
    position: relative;
    cursor: pointer;

    &__img {
      border-radius: 5px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
      }

      &:after {
        transform: perspective(400px) rotateX(-90deg);
        transform-origin: top;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--base-color);
        opacity: 0;
        transform: perspective(400px) rotateX(-90deg);
        transform-origin: top;
        border-radius: 6px;
        transition: 0.4s;
        z-index: 1;
      }
    }

    &__intro {
      display: none;
      width: 250px;
      background: var(--white-color);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 0 10px 5px rgb(0 0 0 / 6%);
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      text-align: center;

      &-name {
        font-weight: 600;
        color: var(--secondary-color);
        font-size: var(--font-2m);
        font-family: var(--title-font);

        &:hover {
          color: var(--base-hover-color);
        }
      }

      &-position {
        color: var(--base-color);
        margin: 15px 0px;

        &:hover {
          color: var(--base-hover-color);
        }
      }

      &-social {
        .icon {
          width: 40px;
          height: 40px;
          background: var(--base-color);
          color: var(--secondary-color);
          border-radius: 50%;
          padding: 10px;
          line-height: 40px;
          margin-right: 10px;

          svg {
            vertical-align: middle;
          }

          &:hover {
            background: var(--secondary-color);
            color: var(--white-color);
          }
        }
      }
    }

    &:hover {
      .card__intro {
        display: block;
      }

      .card__img {
        &:after {
          opacity: 0.6;
          transform: perspective(400px) rotateX(0deg);
        }
      }
    }
  }
`;

const TeamCard = ({ name, img }) => {
  return (
    <StyledTeamCard>
      <div className="card">
        <div className="card__img">
          <img src={img} alt="member" />
        </div>
        <div className="card__intro">
          <div className="card__intro-name">{name}</div>
          <div className="card__intro-position">Ac Specialist</div>
          <div className="card__intro-social">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
