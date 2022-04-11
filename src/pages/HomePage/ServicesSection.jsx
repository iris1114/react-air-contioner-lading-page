import styled from "styled-components";
import Title from "../../components/common/Title";

const StyledServiceSection = styled.section``;

const ServiceSection = () => {
  return (
    <StyledServiceSection>
      <div className="services container">
        <div className="service__title">
          <Title blackText="Our " yellowText="Services" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
      </div>
    </StyledServiceSection>
  );
};

export default ServiceSection;
