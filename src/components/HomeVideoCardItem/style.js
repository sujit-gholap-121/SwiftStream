import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoCardLink = styled(Link)`
  background-color: transparent;
  color: #222222;
  text-decoration: none;
`
export const VideoCardLi = styled.li`
  box-sizing: border-box;
  margin: 10px 20px 10px 0px;
  padding: 0px;
  width: 210px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const VideoCardImg = styled.img`
  width: 100%;
  border-radius: 6px;
`
export const CardDetails = styled.div`
  padding: 0px;
  display: flex;
  align-items: flex-start;
`
export const CardVideoDetails = styled.div`
  padding: 5px;
`

export const DetailsHead = styled.p`
  font-size: 11px;
  font-weight: 600;
`
export const ChannelProfileLogo = styled.img`
  width: 30px;
  margin-top: 10px;
  border-radius: 6px;
`
export const DetailsHead1 = styled.p`
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 0px;
`
export const ViewsContainer = styled.div`
  padding: 0px;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
`
export const ViewsPara = styled.p`
  font-size: 11px;
  font-weight: 400;
  margin-right: 10px;
`
