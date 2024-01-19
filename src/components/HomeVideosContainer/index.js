import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import HomeFailureView from '../HomeFailureView'
import HomeEmptySearch from '../HomeEmptySearch/index'
import AppContext from '../../context/AppContext'
import './index.css'
import {
  HomeContainer,
  Head2,
  SubscribeContainer,
  SubscribeCard,
  VideosList,
  SubscribeButton,
  SubscribeImg,
  SearchContainer,
  VideosListContainer,
  CloseButton,
  SearchBar,
} from './style'
import HomeVideoCardItem from '../HomeVideoCardItem/index'

class HomeVideosContainer extends Component {
  state = {
    displayStatus: true,
    search: '',
    fetchVideoStatus: 'loading',
    homeVideosList: [],
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    try {
      const response = await fetch(url, options)
      const res = await response.json()
      if (response.ok) {
        this.onSuccess(res.videos)
      } else {
        this.onFailure(res.error_msg)
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
    this.setState({homeVideosList: newLt, fetchVideoStatus: 'success'})
  }

  onFailure = () => {
    this.setState({fetchVideoStatus: 'failed'})
  }

  closeBanner = () => {
    this.setState(prev => ({displayStatus: !prev.displayStatus}))
  }

  updateSearch = e => {
    this.setState({search: e.target.value})
  }

  render() {
    const {displayStatus, homeVideosList, fetchVideoStatus, search} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer
              data-testid="home"
              bgColor={isDark ? '#181818' : '#f9f9f9'}
              color={isDark ? '#f9f9f9' : ' #181818'}
            >
              <SubscribeContainer
                displayStatus={displayStatus ? 'flex' : 'none'}
              >
                <SubscribeCard isDark data-testid="banner">
                  <SubscribeImg
                    alt="nxt watch logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                  <Head2>Buy Nxt Watch Premium</Head2>
                  <SubscribeButton type="button">GET IT NOW</SubscribeButton>
                </SubscribeCard>
                <CloseButton
                  type="button"
                  data-testid="close"
                  onClick={this.closeBanner}
                >
                  <IoMdClose />
                </CloseButton>
              </SubscribeContainer>
              <VideosListContainer>
                <SearchContainer>
                  <SearchBar
                    type="search"
                    value={search}
                    placeholder="Search"
                    onChange={this.updateSearch}
                  />
                  <button
                    data-testid="searchButton"
                    className="search-btn"
                    type="button"
                  >
                    <FaSearch />{' '}
                  </button>
                </SearchContainer>

                {fetchVideoStatus === 'success' && (
                  <VideosList>
                    {homeVideosList.map(ele => (
                      <HomeVideoCardItem
                        key={ele.id}
                        item={ele}
                        isDark={isDark}
                      />
                    ))}
                  </VideosList>
                )}
                {homeVideosList.length === 0 && (
                  <HomeEmptySearch fetchVideos={this.fetchVideos} />
                )}
                {fetchVideoStatus === 'failed' && (
                  <HomeFailureView fetchVideos={this.fetchVideos} />
                )}
                {fetchVideoStatus === 'loading' && (
                  <div className="loader-container" data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#ffffff"
                      height="50"
                      width="50"
                    />
                  </div>
                )}
              </VideosListContainer>
            </HomeContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default HomeVideosContainer
