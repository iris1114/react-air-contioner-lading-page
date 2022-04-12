import styled from "styled-components";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";

const StyledConsultSection = styled.section`
  .consult{
      background-image: url(${require("../../images/consult-bg.jpg")});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      position: relative;
      background-size: cover;



      &__filter{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
      }

    &__title{
      padding: 80px 0px 50px;
      margin: auto;
      text-align: center;

      &-sub{
        color: var(--white-color); 
        position: relative;
        margin-bottom: 20px;
      }
    }

    &__btns{
        text-align: center;
        margin: auto;
        padding-bottom: 80px;
    }
  }
`;

const ConsultSection = () => {
  return (
    <StyledConsultSection>
      <div className="consult">
          <div className="consult__filter"></div>
          <div className="container">
            <div className="consult__title col-md-6">
                <div className="consult__title-sub">Get Free Consultations</div>
                <Title whiteText= "Want To Know More Informations About Our Company?"  />
            </div>
            <div className="consult__btns col-md-6">
                <Button variant="primary" text="get a free quote"/>
                <Button variant="secondary" text="how it works"/>
            </div>
          </div>
      </div>
    </StyledConsultSection>
  );
};

export default ConsultSection;
