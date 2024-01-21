import MenuSection from '../MenuSection'
import Header from '../Header'
import HomeVideosContainer from '../HomeVideosContainer'
import AppContext from '../../context/AppContext'
import './index.css'
import MainHomeContainer from './style'

const Home = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />
          <MainHomeContainer
            bgColor={isDark ? '#181818' : '#f9f9f9'}
            color={isDark ? '#f9f9f9' : '#181818'}
          >
            <MenuSection />
            <HomeVideosContainer />
          </MainHomeContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default Home
