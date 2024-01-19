import {HomeFailureContainer, Heading1, P1} from './style'
import './index.css'
import AppContext from '../../context/AppContext'
import HomeStyle from '../homeStyle'
import Header from '../Header'
import MenuSection from '../MenuSection'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />
          <HomeStyle
            data-testid="savedVideos"
            bgColor={isDark ? ' #0f0f0f' : '#f9f9f9'}
          >
            <MenuSection />
            <HomeFailureContainer isDark={isDark}>
              <img
                className="failure-img"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="failure view"
              />
              <Heading1 isDark={isDark}>Page Not Found</Heading1>
              <P1 isDark>
                we are sorry, the page you requested could not be found.
              </P1>
            </HomeFailureContainer>
          </HomeStyle>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
