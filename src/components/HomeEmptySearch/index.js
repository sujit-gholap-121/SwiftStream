import {HomeFailureContainer, Heading1, P1, RetryButton} from './style'
import './index.css'
import AppContext from '../../context/AppContext'

const HomeEmptySearch = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      console.log(isDark)
      const {fetchVideos} = props
      return (
        <HomeFailureContainer isDark={isDark}>
          <img
            className="failure-img"
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <Heading1 isDark={isDark}>Oops! Something Went Wrong</Heading1>
          <P1 isDark={isDark}>We are having some trouble</P1>
          <RetryButton isDark type="button" onClick={fetchVideos}>
            Retry
          </RetryButton>
        </HomeFailureContainer>
      )
    }}
  </AppContext.Consumer>
)

export default HomeEmptySearch
