import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const ApplyHeader = styled.div`
  margin-left: 14vw;
  margin-top: 316px;
`;

export const HeaderText = styled.div`
  font-size: ${fonts.Heading2Size};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 700;
`;

export const Testimonial = styled.div`
  display: flex;
  margin-top: 115px;
  margin-bottom: 148px;
`;

export const TestimonialText = styled.div`
  font-size: ${fonts.BookSub};
  font-family: ${fonts.space_mono};
  font-weight: 300;
  width: 42vw;
`;

export const TestimonialImage = styled.img`
  width: 152px;
  height: 182px;
  object-fit: contain;
  margin-right: 58px;
`;

export const Characteristics = styled.div`
  background-color: ${colors.black};
  padding-left: 14vw;
`;

export const CharacteristicsHeader = styled.div`
  color: ${colors.white};
  font-size: ${fonts.BookSub};
  font-weight: 300;
  font-family: ${fonts.itc_avante_garde};
  width: 27vw;
  padding-top: 95px;
`;

export const CharacteristicsItem = styled.div`
  margin-top: 52px;
`;

export const CharacteristicItem = styled.ul``;

export const ListItem = styled.li`
  color: ${colors.white};
  font-size: ${fonts.buttonSize};
  font-family: ${fonts.space_mono};
  width: 53vw;
`;

export const ApplyCTA = styled.div`
  a {
    text-decoration: none;
    color: ${colors.black};
    background-color: ${colors.orange};
    padding: 22px 85px;
    font-size: ${fonts.buttonSize};
    font-family: ${fonts.space_mono};
    border-radius: 17px;
  }

  margin-top: 77px;
  padding-bottom: 103px;
`;

export const FAQs = styled.div`
  border: solid 1px;
  width: 86vw;
  margin-left: 6vw;
  margin-bottom: 211px;
`;

export const QuestionAnswer = styled.div`
cursor: pointer;

`;

export const QuestionText = styled.div`
  font-size: ${fonts.QuestionText};
  font-family: ${fonts.space_mono};
  padding: 48px;
  border: solid 1px;
  position: relative;

  img {
    position: absolute;
    width: 23px;
    right: 33px;
  }
`;

export const Answer = styled.div`
  font-size: ${fonts.QuestionText};
  font-family: ${fonts.space_mono};
  padding: 48px;
  display: none;

  &.shown {
    display: block;
  }
`;

export const FAQHeader = styled.div`
  margin-left: 6vw;
  font-size: ${fonts.Heading2Size};
  font-family: ${fonts.itc_avante_garde};
  margin-top: 123px;
  margin-bottom: 73px;
`;
