import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {IconContext} from 'react-icons'
import Loader from 'react-loader-spinner'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import HomeStyle from '../homeStyle'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import MenuSection from '../MenuSection'
import VideoPlayerFailureView from '../VideoPlayerFailureView/index'

import {TrendPara} from '../Trending/style'

import {
  VideoPlayerContainer,
  InnerDescription,
  Div,
  VideoDescriptionDiv,
  PlayerHead,
  Label,
  Head3,
  Button,
  ChannelImg,
  CountPara,
  PLayerDiv,
  OuterBody,
  Div1,
} from './style'

class VideoPlayer extends Component {
  state = {
    fetchStatus: 'loading',
    currentVideo: {},
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const res = await response.json()
    try {
      if (response.ok) {
        this.onSuccess(res.video_details)
      } else {
        this.onFailure(res.error_msg)
      }
    } catch (e) {
      this.onFailure(res.error_msg)
    }
  }

  onSuccess = ele => {
    const newLt = {
      channel: {
        name: ele.channel.name,
        profileImageUrl: ele.channel.profile_image_url,
        subscriberCount: ele.channel.subscriber_count,
      },
      id: ele.id,
      publishedAt: ele.published_at,
      thumbnailUrl: ele.thumbnail_url,
      title: ele.title,
      description: ele.description,
      viewCount: ele.view_count,
      videoUrl: ele.video_url,
    }
    this.setState({currentVideo: newLt, fetchStatus: 'success'})
  }

  onFailure = () => {
    this.setState({fetchStatus: 'failed'})
  }

  likeClicked = e => {
    e.preventDefault()
    this.setState(prev => ({liked: !prev.liked}))
  }

  dislikeClicked = e => {
    e.preventDefault()
    this.setState(prev => ({disliked: !prev.disliked}))
  }

  render() {
    const {fetchStatus, disliked, liked, currentVideo} = this.state
    const {
      title,
      publishedAt = new Date(),
      viewCount,
      description,
      channel = {},
    } = currentVideo
    const {name, subscriberCount} = channel

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, toggleSavedVideos, savedVideos} = value
          const togglePlaylist = e => {
            e.preventDefault()
            toggleSavedVideos(currentVideo)
          }
          const savedId = savedVideos.map(ele => ele.id)
          const isSaved = savedId.includes(currentVideo.id)
          let likeColor
          if (isDark === true) {
            likeColor = liked ? '#3b82f6' : '#ffffff'
          } else {
            likeColor = liked ? '#3b82f6' : '#0f0f0f'
          }
          let dislikeColor
          if (isDark === true) {
            dislikeColor = disliked ? '#3b82f6' : '#ffffff'
          } else {
            dislikeColor = disliked ? '#3b82f6' : '#0f0f0f'
          }
          let saveColor
          if (isDark === true) {
            saveColor = isSaved ? '#3b82f6' : '#ffffff'
          } else {
            saveColor = isSaved ? '#3b82f6' : '#0f0f0f'
          }
          return (
            <OuterBody>
              <Header />
              <HomeStyle>
                <MenuSection />
                {fetchStatus === 'success' && (
                  <VideoPlayerContainer
                    data-testid="videoItemDetails"
                    bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                    color={isDark ? '#f1f1f1' : ' #181818'}
                  >
                    <PLayerDiv>
                      <ReactPlayer url={currentVideo.videoUrl} controls />
                    </PLayerDiv>

                    <VideoDescriptionDiv>
                      <PlayerHead>{title}</PlayerHead>
                      <InnerDescription>
                        <Div>
                          <TrendPara>{viewCount} views </TrendPara>
                          <TrendPara>
                            {formatDistanceToNow(new Date(publishedAt))}
                          </TrendPara>
                        </Div>
                        <Div>
                          <Div onClick={this.likeClicked}>
                            <Button color={likeColor} type="button" id="like">
                              <IconContext.Provider
                                value={{
                                  color: likeColor,
                                  size: 22,
                                }}
                              >
                                <BiLike />
                              </IconContext.Provider>
                            </Button>{' '}
                            <Label color={likeColor}>Like</Label>
                          </Div>
                          <Div onClick={this.dislikeClicked}>
                            <Button
                              color={dislikeColor}
                              type="button"
                              id="like"
                            >
                              <IconContext.Provider
                                value={{
                                  color: dislikeColor,
                                  size: 22,
                                }}
                              >
                                <BiDislike />
                              </IconContext.Provider>
                            </Button>{' '}
                            <Label color={dislikeColor}>Dislike</Label>
                          </Div>
                          <Div onClick={togglePlaylist}>
                            <Button color={saveColor} type="button" id="save">
                              <IconContext.Provider
                                value={{
                                  color: saveColor,
                                  size: 22,
                                }}
                              >
                                <MdPlaylistAdd />
                              </IconContext.Provider>
                              {isSaved ? 'Saved' : 'Save'}
                            </Button>{' '}
                          </Div>
                        </Div>
                      </InnerDescription>
                    </VideoDescriptionDiv>
                    <hr />
                    <br />
                    <InnerDescription>
                      <Div>
                        <ChannelImg
                          alt="channel logo"
                          src={channel.profileImageUrl}
                        />
                        <Div1>
                          <Head3>{name}</Head3>
                          <CountPara>{subscriberCount} Subscribers</CountPara>
                          <CountPara>{description}</CountPara>
                        </Div1>
                      </Div>
                    </InnerDescription>
                  </VideoPlayerContainer>
                )}
                {fetchStatus === 'failed' && <VideoPlayerFailureView />}

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
            </OuterBody>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default VideoPlayer
