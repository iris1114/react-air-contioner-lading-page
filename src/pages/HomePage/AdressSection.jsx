import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Title from "../../components/common/Title";
import { device } from "../../utils/device";

const StyledContactSection = styled.section`
  .contact{
    display: flex;
    flex-wrap: wrap;

    &__left{
      text-align: left;
      line-height: 24px;

      @media ${device.laptop} {
        margin-bottom: 50px;
      }

        &-title{
            font-size: var(--font-2m);
            color: var(--secondary-color);
            margin: 30px 0px 20px;
            font-family: var(--title-font);
        }

        &-email{
            color: var(--base-color);
        }

        &-social{
            .icon{
                width: 30px;
                height: 30px;
                background: var(--base-color);
                color: var(--white-color);
                border-radius: 50%;
                padding: 15px;
                line-height: 40px;
                margin-right: 10px;
                
                svg {
                    vertical-align: middle;
                }

                &:hover{
                    background: var(--base-hover-color);
                }
            }
        }
    }

    &__right{

      &-inputs{
        .input-block{
          margin-bottom: 20px;
        }
      }
        .input-group{
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .col-md-6{
            padding: 0px 0px;

            .phone-group{
              display: flex;

              @media ${device.tablet} {
                width: 100%;
              }
              
              a{
                margin-right: 0px;
                border-radius: 0px;
                box-shadow: 0 0px 0px #fff;
                margin-top: 10px;
                height: 60px;
                width: 20%;
                
                
                @media ${device.tablet} {
                  line-height: 40px;
                }
              }

              input{
                width: 140%;
              }
            }
          }
        }
        
    }
  }
`;

const ContactSection = () => {
  return (
    <StyledContactSection>
      <div className="contact container">
        <div className="contact__left col-lg-3 col-md-12">
            <div className="contact__left-title">Address</div>
            <address>1200 W Washington St,<br />Indianapolis,IN 46222,<br />United States</address>
            <div className="contact__left-title">Technical Support</div>
            <div>It is a long established fact that a reader will be distracted.</div>
            <div className="contact__left-email">example@example.com</div>
            <div className="contact__left-title">Connect With Us</div>
            <div className="contact__left-social">
                <span className="icon"><FaFacebook /></span>
                <span className="icon"><FaTwitter /></span>
                <span className="icon"><FaInstagram /></span>
            </div>
        </div>
        <div className="contact__right col-lg-9 col-md-12">
            <Title blackText="Contact " yellowText="Us" />
            <div className="contact__right-inputs">
                <div className="input-block">
                  <label htmlFor="name">Name</label>
                  <Input type="text" name="name" placeholder="Your Name" id="name"/>
                </div>
                <div className="input-group">
                  <div className="input-block col-md-6 col-12">
                    <label htmlFor="phone">Phone no.</label>
                    <div className="phone-group">
                      <Button variant="primary" text="us" />
                      <Input type="number" name="phone" placeholder="+1" id="phone"/>

                    </div>
                  </div>
                  <div className="input-block col-md-6 col-12">
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" placeholder="Email" id="email"/>
                   </div>
                </div>
                <div className="input-block">
                  <label htmlFor="message">Message</label>
                  <Input type="textarea" name="message" placeholder="Leave Your Message" id="message" rows="4" cols="50"/>
                </div>
                <Button variant="primary" text="send message" />
            </div>

         </div>
      </div>
    </StyledContactSection>
  );
};

export default ContactSection;
