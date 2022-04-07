
import styled from "styled-components";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";
import aboutImg from "../../images/about.jpg";
import { device } from "../../utils/device";

const StyledAboutSection = styled.section`
.about{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptop} {
        justify-content: center;
    }

    &__image{
        max-width:300px; 

        img{
            width: 100%;
        }

        @media ${device.laptop} {
            display: none;
        }

    }

    &__text-top{
        .subtitle{
            font-size: var(--font-base);
            color: var(--base-color);
            margin-bottom: 10px;
        }
        .title{
            font-size: var(--font-xl);
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--black-color);

            @media ${device.tablet} {
                font-size: var(--font-l);
            }
        }
        .hightlight{
            color: var(--base-color);
        }
    }

    &__text-bottom{
        display: flex;
        flex-wrap: wrap;

        .bottom-left{
            line-height: 24px;

            p{
                margin-bottom: 20px;
            }

            @media ${device.laptop} {
                margin-bottom: 20px;
            }
        }
        .bottom-right{
            padding: 30px;
            background-color: #fff;
            box-shadow: 0 0 40px 5px rgb(0 0 0 / 3%);
        }
    }
}
`

const AboutSection = () => {
  return (
    <StyledAboutSection>
        <div className="about container">
            <div className="about__image col-lg-4">
                <img src={aboutImg} alt="about" />
            </div>
            <div className="about__text col-lg-8 col-md-10">
                <div className="about__text-top">
                    <div className="subtitle">About us</div>
                    <Title blackText="Cool Solutions, " yellowText="For House & Office" />
                </div>
                <div className="about__text-bottom">
                    <div className="bottom-left col-lg-6 col-md-12">
                        <p>Construction is an ancient humanity activity. It began with the pureley functional need for a controlls environment to moderate the effects of climate. Constructed shelters were one means by which human beings were ableto adapt</p>
                        <p>Construction is an ancient humanity activity. It began with the pureley functional need for a</p>
                        <Button variant="primary" text="learn more"/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="bottom-right">
                            <div className="about__text-circle">
                                <div className="circle-number">83<span className="percent">%</span></div>
                            </div>
                            <p>Air condition stock images in HD and millions of other royalty-free stock</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
       
    </StyledAboutSection>
  );
};

export default AboutSection;
