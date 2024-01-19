import {MdHome, MdPlaylistAddCheck} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import AppContext from '../../context/AppContext'
import {
  SocialPara,
  MenuSectionContainer,
  MenuDiv,
  MenuLinks,
  MenuItem,
  Para,
  SocialDiv,
  SocialList,
  SocialImg,
} from './style'

const MenuSection = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark, updateActiveTab, activeTab} = value
      const onClickUpdateTab = e => {
        updateActiveTab(e.target.textContent)
      }
      return (
        <MenuDiv
          bgColor={isDark ? ' #181818' : '#ffffff'}
          color={isDark ? '#f9f9f9' : ' #181818'}
        >
          <MenuSectionContainer>
            <MenuLinks to="/">
              <MenuItem
                isActive={activeTab === 'Home'}
                color={isDark ? '#ffffff' : ' #181818'}
                value="Home"
                onClick={onClickUpdateTab}
              >
                <IconContext.Provider value={{color: '#ff0000', size: 30}}>
                  <MdHome />
                  <Para>Home</Para>
                </IconContext.Provider>
              </MenuItem>
            </MenuLinks>
            <MenuLinks to="/trending">
              <MenuItem
                color={isDark ? '#d7dfe9' : ' #181818'}
                value="Trending"
                isActive={activeTab === 'Trending'}
                onClick={onClickUpdateTab}
              >
                <IconContext.Provider value={{color: '#ff0000', size: 30}}>
                  <HiFire />
                  <Para>Trending</Para>
                </IconContext.Provider>
              </MenuItem>
            </MenuLinks>
            <MenuLinks to="/gaming">
              <MenuItem
                color={isDark ? '#d7dfe9' : ' #181818'}
                value="Gaming"
                isActive={activeTab === 'Gaming'}
                onClick={onClickUpdateTab}
              >
                <IconContext.Provider value={{color: '#ff0000', size: 30}}>
                  <SiYoutubegaming />
                </IconContext.Provider>
                <Para>Gaming</Para>
              </MenuItem>
            </MenuLinks>
            <MenuLinks to="/saved-videos">
              <MenuItem
                color={isDark ? '#d7dfe9' : ' #181818'}
                value="SavedVideos"
                isActive={activeTab === 'SavedVideos'}
                onClick={onClickUpdateTab}
              >
                <IconContext.Provider value={{color: '#ff0000', size: 30}}>
                  <MdPlaylistAddCheck />
                  <Para>Saved Videos</Para>
                </IconContext.Provider>
              </MenuItem>
            </MenuLinks>
          </MenuSectionContainer>
          <SocialDiv>
            <SocialPara>CONTACT US</SocialPara>
            <SocialList>
              <SocialImg
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <SocialImg
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <SocialImg
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </SocialList>
            <SocialPara>
              Enjoy! Now to see your channels and recommendations!
            </SocialPara>
          </SocialDiv>
        </MenuDiv>
      )
    }}
  </AppContext.Consumer>
)

export default MenuSection
