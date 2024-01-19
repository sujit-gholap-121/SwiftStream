import {HomeFailureContainer, Heading1, P1, RetryButton} from './style'
import './index.css'
import AppContext from '../../context/AppContext'

const VideoPlayerFailureView = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const {fetchTrendingVideos} = props
      return (
        <HomeFailureContainer isDark={isDark}>
          <img
            className="failure-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="failure view"
          />
          <Heading1 isDark={isDark}>Oops! Something Went Wrong</Heading1>
          <P1>
            We are having some trouble to complete your request. Please try
            again.
          </P1>
          <RetryButton isDark type="button" onClick={fetchTrendingVideos}>
            Retry
          </RetryButton>
        </HomeFailureContainer>
      )
    }}
  </AppContext.Consumer>
)

export default VideoPlayerFailureView
