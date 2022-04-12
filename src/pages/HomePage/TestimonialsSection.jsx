import styled from "styled-components";
import TestinonailCard from "../../components/cards/TestimonialCard";
import Title from "../../components/common/Title";
import { testimonialList } from "../../utils/data";

const StyledTestinonailsSection = styled.section`
  .testinonails{
    display: flex;
    flex-wrap: wrap;

    &__left{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      }

      p{
          text-align: left;
          margin-bottom: 20px;
          line-height: 24px;
      }
    }

    &__right{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
  }
`;

const TestinonailsSection = () => {
  return (
    <StyledTestinonailsSection>
      <div className="testinonails container">
        <div className="testinonails__left col-lg-5 col-md-12">
          <Title blackText="Our " yellowText="Testinonails " />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="testinonails__right col-lg-7 col-md-12">
          {testimonialList.map((item) => {
            return <TestinonailCard card={item} key={item.id} />;
          })}
        </div>
      </div>
    </StyledTestinonailsSection>
  );
};

export default TestinonailsSection;
