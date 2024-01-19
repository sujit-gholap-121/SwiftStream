import {HomeFailureContainer, Heading1} from './style'
import './index.css'
import AppContext from '../../context/AppContext'

const SavedFailureView = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeFailureContainer isDark={isDark}>
          <img
            className="failure-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading1 isDark={isDark}>No saved videos found</Heading1>
          <p>Save your videos by clicking a button</p>
        </HomeFailureContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SavedFailureView
