import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const MenuSectionContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  height: 100%;
  //   background-color: ${props => props.bgColor};
  //   color: ${props => props.color};
  padding: 0px;
  list-style-type: none;
`
export const MenuDiv = styled.div`
  margin-top: 0px;
  min-height: 100vh;
  border-radius: 6x;
  align-self: stretch;
  padding: 0px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 250px;
  min-width: 160px;
  //   flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  //   @media (max-width: ${'500px'}) {
  //     width: 130px;
  //   }
`

export const MenuLinks = styled(Link)`
  background-color: transparent;
  color: #222222;
  text-decoration: none;
  margin: 0px;
  align-self: flex-start;
  padding: 0px;
  width: 100%;
`

export const MenuItem = styled.li`
  display: flex;
  background-color: ${props => {
    console.log('isDArk', props.isDark)
    if (props.isDark) {
      return props.isActive ? '#383838' : 'transparent'
    }
    return props.isActive ? '#e2e8f0' : 'transparent'
  }};
  padding: 15px;
  justify-content: flex-start;
  padding-right: 0px;
  align-items: center;
  margin: 0px;
  height: 50px;
  width: 100%;
  color: ${props => props.color};
`
export const Para = styled.p`
  margin-left: 10px;
  font-size: 17px;
  font-weight: 700;
`
export const SocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-weight: 700;
`
export const Head1 = styled.h1`
  font-size: 16px;
`
export const SocialList = styled.div`
  list-style-type: none;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
`
export const SocialImg = styled.img`
  height: 20px;
  margin-left: 5px;
`
export const SocialPara = styled.p`
  font-size: 12px;
  margin-top: 15px;
`
export const LiButton = styled.button`
  border: none;
  background-color: transparent;
`
