import styled from "styled-components";
import Title from "../../components/common/Title";
import gallery1 from "../../images/gallery/gallery1.jpg";
import gallery2 from "../../images/gallery/gallery2.jpg";
import gallery3 from "../../images/gallery/gallery3.jpg";
import { device } from "../../utils/device";

const StyledGallerySection = styled.section`
  .gallery{
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
    &__imgs{
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      &-right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      
      img{
        overflow: hidden;
        object-fit: cover;
        cursor: pointer;
        transition: 0.3s;
        position: relative;
        width: 100%;
        margin-bottom: 20px;

          &:hover{
            transform: scale(1.1);
            object-fit: cover;
          }        
        }
      }
    }
  }
`;

const GallerySection = () => {
  return (
    <StyledGallerySection>
      <div className="gallery container">
        <div className="gallery__title">
          <Title blackText="Our " yellowText="Gallery" />
          <p className="gallery__title-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <div className="gallery__imgs">
            <div className="gallery__imgs-left">
                <img src={gallery1} alt="gallery" />
            </div>
            <div className="gallery__imgs-right">
                <img src={gallery2} alt="gallery" />
                <img src={gallery3} alt="gallery" />
            </div>
        </div>
      </div>
    </StyledGallerySection>
  );
};

export default GallerySection;
