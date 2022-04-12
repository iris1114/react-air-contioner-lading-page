import styled from "styled-components";
import PricingCard from "../../components/cards/PriceCard";
import Title from "../../components/common/Title";
import { priceList } from "../../utils/data";
import { device } from "../../utils/device";

const StyledPricingSection = styled.section`
  .pricing {
    &__title {
      margin: 0px auto 50px;
      text-align: center;

      &-desc {
        width: 60%;
        margin: auto;

        @media ${device.mobileL} {
          width: 100%;
        }
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const PricingSection = () => {
  return (
    <StyledPricingSection>
      <div className="pricing container">
        <div className="pricing__title">
          <Title blackText="Our " yellowText="Pricing" />
          <p className="pricing__title-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="pricing__list">
          {priceList.map((item, index) => {
            return <PricingCard card={item} key={index} />;
          })}
        </div>
      </div>
    </StyledPricingSection>
  );
};

export default PricingSection;
