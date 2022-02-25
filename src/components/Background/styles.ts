import styled from 'styled-components';
import { StepCircleProps, StepLineProps } from './types';
import colors from '../../styles/colors';

const getBgColor = (props: StepCircleProps) => {
  if (props.isDone) {
    return colors.primary_color;
  } else if (props.isActive) {
    return colors.secondary_color;
  }

  return colors.terciary_color;
};

export const PageBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const GrayLine = styled.div`
  background: ${colors.gray_line};
  height: 80px;
  width: 100%;
  display: flex;
  border-bottom-color: black;
  border-bottom-width: 2px;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: ${colors.header};
  display: flex;
  margin: 20px 20px 0px 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const StepContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 0px 20px 0px 20px;
`;

export const StepCircle = styled.div<StepCircleProps>`
  padding: 5px 10px 5px 10px;
  border-radius: 100%;
  background-color: ${(props) => getBgColor(props)};
  color: white;
`;

export const StepLine = styled.div<StepLineProps>`
  width: 50px;
  height: 5px;
  background-color: ${(props: StepLineProps) =>
    props.isDone ? colors.primary_color : colors.terciary_color}; ;
`;

export const StepBottomArrow = styled.div`
  position: absolute;
  margin-top: 15px;
  border: 15px solid transparent;
  border-top: 0;
  border-right-color: transparent;
  border-bottom-color: white;
  border-left-color: transparent;
  display: block;
  width: 0px;
  height: 0px;
`;
