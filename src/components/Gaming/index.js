import {Component} from 'react'
import Cookies from 'js-cookie'
import {IconContext} from 'react-icons'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import HomeStyle from '../homeStyle'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import MenuSection from '../MenuSection'

import {
  TrendingVideoContainer,
  TrendTitle,
  TrendTitleDiv,
  FireContainer,
  TrendingLinks,
} from '../Trending/style'

import {
  GamingCard,
  GameDetails,
  GamingContainer,
  GamingImg,
  GamingPara,
} from './style'
import './index.css'
import HomeFailureView from '../HomeFailureView'

class Gaming extends Component {
  state = {fetchStatus: 'loading', fetchList: []}

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/gaming`
    try {
      const response = await fetch(url, options)
      const res = await response.json()
      if (response.ok) {
        this.onSuccess(res.videos)
        return
      }
      this.onFailure()
    } catch (e) {
      this.onFailure()
    }
  }

  onSuccess = lt => {
    const newLt = lt.map(ele => ({
      id: ele.id,
      thumbnailUrl: ele.thumbnail_url,
      title: ele.title,
      viewCount: ele.view_count,
    }))
    this.setState({fetchList: newLt, fetchStatus: 'success'})
  }

  onFailure = () => {
    this.setState({fetchStatus: 'failed'})
  }

  render() {
    const {fetchStatus, fetchList} = this.state
    console.log(fetchStatus)
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeStyle
                data-testid="gaming"
                bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
              >
                <MenuSection />
                {fetchStatus === 'success' && (
                  <TrendingVideoContainer
                    bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                    color={isDark ? '#f9f9f9' : ' #181818'}
                  >
                    <TrendTitleDiv bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}>
                      <FireContainer>
                        <IconContext.Provider
                          value={{size: 35, color: '#ff0000'}}
                        >
                          <SiYoutubegaming />
                        </IconContext.Provider>
                      </FireContainer>
                      <TrendTitle>Gaming</TrendTitle>
                    </TrendTitleDiv>
                    <GamingContainer>
                      {fetchList.map(ele => (
                        <TrendingLinks to={`/videos/${ele.id}`}>
                          <GamingCard key={ele.id}>
                            <GamingImg
                              alt="video thumbnail"
                              src={ele.thumbnailUrl}
                            />
                            <GameDetails>
                              <GamingPara>{ele.title}</GamingPara>
                              <GamingPara>
                                {ele.viewCount} Watching Worldwide
                              </GamingPara>
                            </GameDetails>
                          </GamingCard>
                        </TrendingLinks>
                      ))}
                    </GamingContainer>
                  </TrendingVideoContainer>
                )}
                {fetchStatus === 'failed' && (
                  <HomeFailureView fetchVideos={this.fetchVideos} />
                )}
                {fetchStatus === 'loading' && (
                  <div className="loader-container" data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#ffffff"
                      height="50"
                      width="50"
                    />
                  </div>
                )}
              </HomeStyle>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
