import styled from 'styled-components'

export const HomeFailureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  padding-top: 0px;
  margin-top: 40px;
  width: 100%;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
`

export const HomeFailureImg = styled.img`
  width: 60vw;
`

export const Heading1 = styled.h1`
  font-size: 18px;
  //   color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
`
export const P1 = styled.p`
  font-size: 16px;
  //   color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
`
export const RetryButton = styled.button`
  padding: 5px 10px;
  background-color: #4f46e5;
  color: #ffffff;
`
