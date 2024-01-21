import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

const homeStyle = styled.div`
  display: flex;
  align-items: stretch;
  width: auto;
  padding: 0px;
  height: 100%;
  background-color: ${props => props.bgColor};
  //   min-height: 3000px;
`
export default homeStyle
