import {Component} from 'react'
import {IconContext} from 'react-icons'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import HomeStyle from '../homeStyle'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import MenuSection from '../MenuSection'
import SavedFailureView from '../SavedFailureView/index'
import {
  TrendingVideoContainer,
  TrendTitle,
  TrendTitleDiv,
  FireContainer,
  TrendImg,
  TrendCardDetails,
  TrendPara,
  TrendContainer,
  TrendHead,
  TrendHead1,
  TrendingLinks,
} from '../Trending/style'
import {SavedLi, SavedList} from './style'

class SavedVideos extends Component {
  render() {
    // const {fetchStatus, fetchList} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          console.log(savedVideos)
          const totalVideos = savedVideos.length
          return (
            <>
              <Header />
              <HomeStyle
                data-testid="savedVideos"
                bgColor={isDark ? ' #0f0f0f' : '#f9f9f9'}
              >
                <MenuSection />
                {totalVideos === 0 && <SavedFailureView />}
                {totalVideos > 0 && (
                  <TrendingVideoContainer
                    bgColor={isDark ? '#000000' : '#f9f9f9'}
                    color={isDark ? '#f1f1f1' : ' #181818'}
                  >
                    <TrendTitleDiv bgColor={isDark ? '#0f0f0f' : '#f4f4f4'}>
                      <FireContainer>
                        <IconContext.Provider
                          value={{size: 35, color: '#ff0000'}}
                        >
                          <HiFire />
                        </IconContext.Provider>
                      </FireContainer>
                      <TrendTitle>Saved Videos</TrendTitle>
                    </TrendTitleDiv>
                    <SavedList>
                      {savedVideos.map(ele => (
                        <TrendingLinks to={`/videos/${ele.id}`}>
                          <SavedLi key={ele.id}>
                            <TrendImg
                              alt="video thumbnail"
                              src={ele.thumbnailUrl}
                            />
                            <TrendCardDetails>
                              <TrendHead
                                color={isDark ? '#f1f1f1' : ' #181818'}
                              >
                                {ele.title}
                              </TrendHead>
                              <TrendHead1
                                color={isDark ? '#f1f1f1' : ' #181818'}
                              >
                                {ele.channel.name}
                              </TrendHead1>
                              <TrendContainer>
                                <TrendPara>{ele.viewCount} views </TrendPara>
                                <TrendPara>
                                  {formatDistanceToNow(
                                    new Date(ele.publishedAt),
                                  )}
                                </TrendPara>
                              </TrendContainer>
                            </TrendCardDetails>
                          </SavedLi>
                        </TrendingLinks>
                      ))}
                    </SavedList>
                  </TrendingVideoContainer>
                )}
              </HomeStyle>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default SavedVideos
