import styled from "styled-components";

const StyledServiceCard = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  
  .card{
    position: relative;

    &:before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: var(--base-color);
      transition: .3s;
    }

    &__img{
      width: 100%;
      position: relative;

      &-main{
        width: 100%;
      }

      &-icon{
        width: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
      }
    }

    &__text{
      padding: 30px;
      box-shadow: 0 0 40px 5px rgb(0 0 0 / 3%);

      &-title{
        font-size: var(--font-2m);
        color: var(--secondary-color);
        bacground-color: var(--white-color);
        margin-bottom: 20px;
      }
    }
  }

  &:hover{
    .card{
      &:before{
        width: 100%;
      }
      &__img{
        &:before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.4);
        }

        &-icon{
          display: block;
        }
      }
    }
   
  }
`;

const ServiceCard = ({card}) => {
  return (
    <StyledServiceCard className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card__img">
          <img className="card__img-main" src={card.img} alt="card" />
          <img className="card__img-icon" src={card.icon} alt="icon"/>
        </div>
        <div className="card__text">
          <h3 className="card__text-title">{card.title}</h3>
          <p className="card__text-desc">{card.desc}</p>
        </div>
      </div>    
    </StyledServiceCard>
  );
};

export default ServiceCard;
