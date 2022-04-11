import Slider from "react-slick";
import styled from "styled-components";
import { device } from "../../utils/device";
import Button from "../common/Button";

const StyledHeroSlider = styled.div`
  overflow: hidden;

  .slick-arrow {
    background-color: var(--base-color);
    width: 50px;
    height: 50px;
    border-radius: 5px;

    &:hover {
      background-color: var(--base-hover-color);
    }
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
    line-height: 60px;

    &::before {
      content: "<";
    }
  }

  .slick-next {
    right: 20px;
    line-height: 60px;

    &::before {
      content: ">";
    }
  }

  .slick-dots {
    bottom: 20px;

    li button {
      border-radius: 50%;
      width: 15px;
      height: 15px;
      background-color: var(--line-gray);

      &:before {
        display: none;
      }
    }
    .slick-active {
      button {
        background-color: var(--base-color);
      }
    }
  }
`;

const StyledBanner = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;

  @media ${device.laptopM} {
    height: 80vh;
  }

  @media ${device.mobileM} {
    height: 100vh;
  }

  .banner {
    &__filter {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100vh;
      z-index: 1;
    }

    &__text {
      width: 50%;
      position: absolute;
      top: 60%;
      left: 8%;
      z-index: 2;
      transform: translateY(-50%);

      @media ${device.laptopM} {
        width: 80%;
        top: 55%;
      }
    }

    &__subtitle {
      font-size: var(--font-m);
      color: var(--base-color);
      margin-bottom: 20px;
    }

    &__title {
      font-size: var(--font-2xl);
      color: var(--hero-color);
      margin-bottom: 20px;

      @media ${device.laptopM} {
        font-size: var(--font-l);
      }
    }

    &__desc {
      color: var(--white-color);
      line-height: 30px;
      margin-bottom: 50px;
    }

    &__btns {
      display: flex;
    }
  }
`;

const HeroSlider = ({ meta }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  console.log(meta);
  return (
    <StyledHeroSlider>
      <Slider {...settings}>
        {meta.map((hero, index) => {
          return (
            <StyledBanner className="banner" bg={hero.img} key={index}>
              <div className="banner__filter"></div>
              <div className="banner__text container">
                <div className="banner__subtitle">{hero.subtitle}</div>
                <div className="banner__title">{hero.title}</div>
                <div className="banner__desc">{hero.desc}</div>
                <div className="banner__btns">
                  <Button variant="secondary" text="Air Condition" />
                  <Button variant="primary" text="read more" />
                </div>
              </div>
            </StyledBanner>
          );
        })}
      </Slider>
    </StyledHeroSlider>
  );
};

export default HeroSlider;
