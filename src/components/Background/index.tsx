import React, { Fragment } from 'react';
import {
  PageBackground,
  GrayLine,
  Header,
  StepContainer,
  ContentContainer,
  StepCircle,
  StepLine,
  StepBottomArrow,
} from './styles';
import { BackgroundProps } from './types';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Page } from '../../store/user/types';
import Dropdown from '../Dropdown';
function Background({ children }: BackgroundProps) {
  const { activePage, pages } = useSelector(
    (state: RootStateOrAny) => state.user
  );

  return (
    <PageBackground>
      <GrayLine>
        <Header>
          <StepContainer>
            {pages.map((val: Page, index: number) => {
              const active = index === activePage;
              return (
                <Fragment key={index}>
                  <div>
                    <StepCircle isActive={active} isDone={val.done}>
                      {val.text}
                    </StepCircle>
                    {active && <StepBottomArrow />}
                  </div>
                  {index !== pages.length - 1 && <StepLine isDone={val.done} />}
                </Fragment>
              );
            })}
          </StepContainer>
          <Dropdown />
        </Header>
        <ContentContainer>{children}</ContentContainer>
      </GrayLine>
    </PageBackground>
  );
}

export default Background;
