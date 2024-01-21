import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: ${'500px'}) {
    padding: 20px 0px;
  }
`
// export const close
export const SubscribeContainer = styled.div`
  display: ${props => props.displayStatus};
  padding-left: 20px;
  width: 90%;
`

export const SubscribeCard = styled.div`
  border-radius: 4px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 20px;
  background-size: cover;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-content: flex-start;
  color: #181818;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const SubscribeImg = styled.img`
  width: 140px;
`
export const Head2 = styled.p`
  margin-top: 25px;
  font-size: 22px;
`
export const SubscribeButton = styled.button`
  background-color: transparent;
  border-radius: 6px;
  color: #181818;
  align-self: flex-start;
  padding: 4px 10px;
  margin-top: 10px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 0px;
`
export const ShowVideos = styled.ul`
  display: flex;
  padding: 20px;
  align-items: flex-start;
`
export const SearchBar = styled.input`
  padding: 6px 10px;
  width: 100%;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid #cbd5e1;
`
export const VideosListContainer = styled.div`
  padding: 20px;
  width: auto;
  box-sizing: border-box;
`
export const SearchContainer = styled.div`
  width: 90%;
  max-width: 250px;
  margin-bottom: 0px;
  display: flex;
`
export const SearchButton = styled.button`
  padding: 5px 15px;
  text-align: center;
  margin-bottom: 0px;
  //   display: flex;
  //   align-items: flex-start;
`
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
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
