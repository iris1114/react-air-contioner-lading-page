import styled from "styled-components";
import BlogCard from "../../components/cards/BlogCard";

import Title from "../../components/common/Title";
import { blogCardList } from "../../utils/data";
import { device } from "../../utils/device";

const StyledBlogSection = styled.section`
  .blog{
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

const BlogSection = () => {
  return (
    <StyledBlogSection>
      <div className="blog container">
        <div className="blog__title">
          <Title blackText="Our " yellowText="Blog" />
          <p className="blog__title-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="blog__cards">
          {
            blogCardList.map((card, index) => {
              return(
                <BlogCard card={card} key={index} />
              );
            })
          }
        </div>
      </div>
    </StyledBlogSection>
  );
};

export default BlogSection;
