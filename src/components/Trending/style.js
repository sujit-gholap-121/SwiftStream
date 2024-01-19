import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingVideoContainer = styled.div`
  width: 100%;
  margin: 0px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const TrendingVideoCard = styled.div`
  padding: 50px 10%;
  display: flex;
  width: 100%;
`
export const TrendTitleDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
  width: 100%;
  margin: 0px;
  align-items: center;
`
export const TrendTitle = styled.h1`
  font-size: 36px;
`
export const FireContainer = styled.div`
  padding: 10px 12px;
  margin-top: 10px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 30px;
  background-color: #f9f9f9;
`
export const TrendImg = styled.img`
  width: 300px;
  height: 150px;
  margin-right: 20px;
`
export const TrendCardDetails = styled.div`
  padding: 10px;
  padding-top: 0px;
`
//
export const TrendHead = styled.p`
  font-size: 18px;
  margin-top: 0px;
  font-weight: 500;
  color: ${props => props.color};
`

export const TrendHead1 = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const TrendContainer = styled.div`
  padding: 0px;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  color: ##909090;
`
export const TrendPara = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #909090;
  margin-right: 10px;
`
export const TrendingLinks = styled(Link)`
  background-color: transparent;
  color: #222222;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
`
