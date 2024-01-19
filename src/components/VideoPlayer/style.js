import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 40px 120px;
  height: 100vh;
  width: 100%;
  align-self: stretch;
  padding-top: 0px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const DescriptionPara = styled.p`
  font-size: 12px;
`
export const VideoDescriptionDiv = styled.div`
  padding-left: 5px;
  margin-top: 0px;
`
export const PlayerHead = styled.h1`
  font-size: 14px;
`
export const InnerDescription = styled.div`
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: space-between;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  padding: center;
  display: flex;
  align-items: center;
`
export const Label = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  display: flex;
`
export const ChannelImg = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const Head3 = styled.h1`
  font-size: 12px;
  font-weight: 500;
`
export const CountPara = styled.p`
  font-size: 11px;
  font-weight: 400;
`
export const Div1 = styled.div`
  margin-left: 10px;
`
export const PLayerDiv = styled.div`
  width: 60vw;
  margin-top: 40px;
  padding:0px
  height: 70vh;
  margin-bottom: 20px;
`
export const OuterBody = styled.div`
  height: 100%;
  margin: 0px;
  width: 100vw;
  padding: 0px;
`
