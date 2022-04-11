import styled from "styled-components";
import TeamCard from "../../components/cards/TeamCard";
import Title from "../../components/common/Title";

import member1 from "../../images/team/member1.jpg";
import member2 from "../../images/team/member2.jpg";
import member3 from "../../images/team/member3.jpg";
import member4 from "../../images/team/member4.jpg";

const StyledTeamSection = styled.section`
  .team{
    display: flex;
    flex-wrap: wrap;

    &__left{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: flex-end;


      &-text{
        text-align: left;

        &-sub{
            font-size: var(--font-base);
            color: var(--base-color);
            margin-bottom: 10px;
            text-align: left;
        }
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

const TeamSection = () => {
  return (
    <StyledTeamSection>
      <div className="team container">
        <div className="team__left col-lg-6 col-md-12">
            <div className="team__left-text col-md-12">
                <div className="team__left-text-sub">Meet Our Team</div>
                <Title blackText="Meet Our " yellowText="Creative " otherBlackText="Team" />
            </div>
            <div className="team__left-img col-lg-6 col-md-12 col-12">
                <TeamCard name="Mega Nelson" img={member1}/>
            </div>
            
        </div>
        <div className="team__right col-lg-6 col-md-12">
            <div className="team__right-group1 col-md-6 col-12">
                <TeamCard name="Mega Nelson" img={member2}/>
                <TeamCard name="Mega Nelson" img={member3}/>
            </div>
            <div className="team__right-group2 col-md-6 col-12">
                <TeamCard name="Mega Nelson" img={member4}/>
            </div>
         </div>
      </div>
    </StyledTeamSection>
  );
};

export default TeamSection;
