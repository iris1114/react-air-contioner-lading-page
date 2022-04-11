import styled from "styled-components";
import ServiceCard from "../../components/cards/ServiceCard";
import Title from "../../components/common/Title";
import { serviceCardList } from "../../utils/data";
import { device } from "../../utils/device";

const StyledServiceSection = styled.section`
  .service{
    &__title{
      margin:0px auto 50px;
      text-align: center;

      &-desc{
        width: 60%;
        margin: auto;

        @media ${device.mobileL} {
          width: 100%;
        }
      }
    }

    &__cards{
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const ServiceSection = () => {
  return (
    <StyledServiceSection>
      <div className="service container">
        <div className="service__title">
          <Title blackText="Our " yellowText="Services" />
          <p className="service__title-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="service__cards">
          {
            serviceCardList.map((card, index) => {
              return(
                <ServiceCard card={card} key={index} />
              );
            })
          }
        </div>
      </div>
    </StyledServiceSection>
  );
};

export default ServiceSection;
