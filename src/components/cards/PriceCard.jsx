import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import Button from "../common/Button";

const StyledPricingCard = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  
  .card{
    box-shadow: 0 0 40px 5px rgb(0 0 0 / 3%);
    padding: 30px;
    position: relative;

    &__title{
        font-size: var(--font-2m);
        color: var(--secondary-color);
        margin-bottom: 10px;
        font-family: var(--title-font);
    }

    &__price{
        margin: 25px 0px;
        font-size: var(--font-2l);
        color: var(--secondary-color);
        font-family: var(--title-font);

        &-icon{
            font-size: var(--font-2m); 
            vertical-align: text-top;
        }
    }

    &__specs{
        margin: 25px 0px;

        li{
            margin: 15px 0px;
            color: var(--secondary-color);
        }
        &-check{
            color: var(--base-color); 
            margin-right: 10px;
        }
    }

    &__label{
        position: absolute;
        right: 0px;
        top: 0px;

        &-popular{
            background-color: var(--base-color);
            color: var(--white-color);
            padding: 7px 12px;
            text-transform: uppercase;

            &:before{
                content: "";
                position: absolute;
                left: -16px;
                top: -4px;
                border-left: 20px solid #fff;
                border-top: 16px solid var(--base-color);
                border-bottom: 16px solid var(--base-color); 
            }
        }
    }
  }
`;

const PricingCard = ({card}) => {
  return ( 
    <StyledPricingCard className="col-md-6 col-lg-4 col-12">
      <div className="card">
        <h3 className="card__title">{card.name}</h3>
        <p className="card__desc">{card.desc}</p>
        <div className="card__price"><span className="card__price-icon">$</span>{card.price}</div>
        <Button variant="primary" text="choose package" />
        <ul className="card__specs">
            {
                card.specs.map((spec, index) => {
                    return(
                        <li key={index}>
                            <span className="card__specs-check"><FaCheck /></span>{spec}
                        </li>
                    );
                })
            }
        </ul>
        <div className="card__label">
            {
                card.popular ? (
                    <span className="card__label-popular">popular</span>
                ) : null
            }
        </div>
      </div>    
    </StyledPricingCard>
  );
};

export default PricingCard;
