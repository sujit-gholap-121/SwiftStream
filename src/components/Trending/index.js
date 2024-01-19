import {Component} from 'react'
import Cookies from 'js-cookie'
import {IconContext} from 'react-icons'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import HomeStyle from '../homeStyle'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import MenuSection from '../MenuSection'
import HomeFailureView from '../HomeFailureView/index'

import {
  TrendingVideoContainer,
  TrendTitle,
  TrendTitleDiv,
  TrendingVideoCard,
  FireContainer,
  TrendImg,
  TrendCardDetails,
  TrendPara,
  TrendContainer,
  TrendHead,
  TrendHead1,
  TrendingLinks,
} from './style'

class Trending extends Component {
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
    const url = `https://apis.ccbp.in/videos/trending`
    try {
      const response = await fetch(url, options)
      const res = await response.json()
      if (response.ok) {
        this.onSuccess(res.videos)
      } else {
        this.onFailure()
      }
    } catch (e) {
      this.onFailure()
    }
  }

  onSuccess = lt => {
    const newLt = lt.map(ele => ({
      channel: {
        name: ele.channel.name,
        profileImageUrl: ele.channel.profile_image_url,
      },
      id: ele.id,
      publishedAt: ele.published_at,
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
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeStyle
                data-testid="trending"
                bgColor={isDark ? '#0f0f0f' : '#f9f9f9 '}
              >
                <MenuSection />
                {fetchStatus === 'success' && (
                  <TrendingVideoContainer
                    bgColor={isDark ? '#000000' : '#f9f9f9'}
                    color={isDark ? '#f1f1f1' : ' #181818'}
                  >
                    <TrendTitleDiv bgColor={isDark ? '#0f0f0f' : '#f9f9f9 '}>
                      <FireContainer>
                        <IconContext.Provider
                          value={{size: 35, color: '#ff0000'}}
                        >
                          <HiFire />
                        </IconContext.Provider>
                      </FireContainer>
                      <TrendTitle>Trending</TrendTitle>
                    </TrendTitleDiv>

                    {fetchList.map(ele => (
                      <TrendingLinks to={`/videos/${ele.id}`}>
                        <TrendingVideoCard key={ele.id}>
                          <TrendImg
                            src={ele.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <TrendCardDetails>
                            <TrendHead color={isDark ? '#f1f1f1' : ' #0f0f0f'}>
                              {ele.title}
                            </TrendHead>
                            <TrendHead1 color={isDark ? '#f1f1f1' : '#0f0f0f'}>
                              {ele.channel.name}
                            </TrendHead1>
                            <TrendContainer>
                              <TrendPara>{ele.viewCount} views </TrendPara>
                              <TrendPara>
                                {formatDistanceToNow(new Date(ele.publishedAt))}
                              </TrendPara>
                            </TrendContainer>
                          </TrendCardDetails>
                        </TrendingVideoCard>
                      </TrendingLinks>
                    ))}
                  </TrendingVideoContainer>
                )}
                {fetchStatus === 'failed' && <HomeFailureView />}
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
export default Trending
