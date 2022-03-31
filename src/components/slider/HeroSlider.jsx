import Slider from "react-slick";
import styled from "styled-components";



const StyledHeroSlider = styled.div`
    height: 100vh;

    .slick-arrow{
        background-color: var(--base-color);
        width: 50px;
        height: 50px;
        border-radius: 5px;

        &:hover{
            background-color: var(--base-hover-color); 
        }

        @media screen and (max-width: 640px) {
            display: none;
        }
    }

    .slick-prev{
        left: 20px;
        z-index: 1;
        line-height: 60px;

        &::before{
            content: "<";
        }
       
    }

   .slick-next{
       right: 20px;
       line-height: 60px;

       &::before{
        content: ">";
       }
   }


`

const StyledBanner = styled.div`
    .banner{
        width: auto;
        height: 100vh;
        position: relative;

        img{
            max-width: auto; 
        }

        &__text{
            position: absolute;
            top: 50%;
        }

        &__subtitle{
            font-size: 
        }
    }
`

const HeroSlider = ({meta}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
                dots: true,
                arrows: false,
            }
          }
        ]
      };

      console.log(meta)
    return(
        <StyledHeroSlider>
            <Slider {...settings}>
                {
                    meta.map((hero, index) => {
                        return(
                            <StyledBanner className="banner" key={index}>
                                <img src={hero.img} alt="banner" />
                                <div className="banner__text container">
                                    <div className="banner__subtitle">{hero.subtitle}</div>
                                    <div className="banner__title">{hero.title}</div>
                                    <div className="banner__desc">{hero.desc}</div>
                                </div>
                            </StyledBanner>
                        )
                    })
                }
            </Slider>
        </StyledHeroSlider>
    );
}

export default HeroSlider;

