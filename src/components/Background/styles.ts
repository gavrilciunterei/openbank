import styled from 'styled-components';
import { StepCircleProps, StepLineProps } from './types';

const getBgColor = (props: StepCircleProps) => {
  if (props.isActive) {
    return '#00314F';
  } else if (props.isDone) {
    return '#EC0056';
  }

  return '#7F9AA7';
};

export const PageBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const GrayLine = styled.div`
  background: #e5ecec;
  height: 80px;
  width: 100%;
  display: flex;
  border-bottom-color: black;
  border-bottom-width: 2px;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: #d0dadf;
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
    props.isDone ? '#EC0056' : '#7f9aa7'}; ;
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
