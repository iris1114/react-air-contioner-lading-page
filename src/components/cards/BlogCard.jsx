import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

const StyledBlogCard = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  
  .card{

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
      line-height: 24px;

      &-title{
        font-size: var(--font-2m);
        color: var(--secondary-color);
        bacground-color: var(--white-color);
        margin-bottom: 20px;
        font-family: var(--title-font);

        &:hover{
            color: var(--base-hover-color);
        }
      }

      &-date{
        font-size: var(--font-s);  
        margin-bottom: 20px;
        
        &-icon{
            color: var(--base-color);
        }
      }
    }
  }

   
  }
`;

const BlogCard = ({card}) => {
  return (
    <StyledBlogCard className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card__img">
          <img className="card__img-main" src={card.img} alt="card" />
          <img className="card__img-icon" src={card.icon} alt="icon"/>
        </div>
        <div className="card__text">
            <div className="card__text-date">
              <span className="card__text-date-icon"><FaCalendarAlt /> </span>
              {card.date}
            </div>
          <h3 className="card__text-title">{card.title}</h3>
          <p className="card__text-desc">{card.desc}</p>
        </div>
      </div>    
    </StyledBlogCard>
  );
};

export default BlogCard;
