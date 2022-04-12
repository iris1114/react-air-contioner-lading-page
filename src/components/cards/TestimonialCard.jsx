import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import styled from "styled-components";
import { device } from "../../utils/device";

const StyledTestinonailCard = styled.div`
  margin-bottom: 30px;
  
  .card{
      display: flex;
      flex-wrap: wrap;
      background-color: var(--white-color);
      border: 2px solid var(--line-gray);
      padding: 30px;
      border-radius: 6px;
  
    &__img{
        &-main{
            border-radius: 50%; 
        }
    }

    &__text{

      &-top{
        display: flex;
        align-items: center;
        margin-bottom: 20px;


        &-left{
            display: flex;
            align-items: center;

            @media ${device.mobileL} {
                flex-direction: column;
                font-size: var(--font-s);
                align-items: flex-start;
            
            }

            &-name{
                font-size: var(--font-2m);
                color: var(--secondary-color);
                font-family: var(--title-font);

                @media ${device.mobileL} {
                    flex-direction: column;
                    font-size: var(--font-m);
                    margin: 10px 0px;
                }
            }
    
            &-star{
                color: var(--base-color);
                margin-left: 20px;

                @media ${device.mobileL} {
                    margin-left: 0px;
                }
    
                .score{
                    color: var(--font-color);
                    font-size: var(--font-s);
                    margin-left: 15px;
                }
            }
        }

        &-date{
            margin-left: auto;
        }
      }
    }
  }

   
  }
`;

const TestinonailCard = ({card}) => {
  return (
    <StyledTestinonailCard className="col-12">
      <div className="card">
        <div className="card__img col-md-3 col-12">
          <img className="card__img-main" src={card.img} alt="card" />
        </div>
        <div className="card__text col-md-9 col-12">
            <div className="card__text-top">
                <div className="card__text-top-left">
                    <h3 className="card__text-top-left-name">{card.name}</h3>
                    <div className="card__text-top-left-star">
                        <Rating initialRating={card.star} readonly emptySymbol={<FaRegStar/>} fullSymbol={<FaStar/>}/>
                        <span className="score">({card.star}/5)</span>
                    </div>
                </div>
                
                <div className="card__text-top-date">{card.date}</div>
            </div>
          <p className="card__text-bottom">{card.comment}</p>
        </div>
      </div>    
    </StyledTestinonailCard>
  );
};

export default TestinonailCard;
