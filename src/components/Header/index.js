import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import AppContext from '../../context/AppContext'
import {
  Navbar,
  LogoutButton,
  PopDiv,
  NavImg,
  ModalBtnDiv,
  Navlist,
  ModalPara,
  ProfileImage,
  Li,
  ToggleButton,
  CancelButton,
  ConfirmButton,
} from './style'

class Header extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, toggleDarkButton} = value
          const onLogout = () => {
            Cookies.remove('jwt_token')
            const {history} = this.props
            history.replace('/login')
          }
          return (
            <Navbar
              bgColor={isDark ? ' #181818' : '#ffffff'}
              color={isDark ? '#ffffff' : ' #181818'}
            >
              <Link to="/">
                <NavImg
                  alt="website logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
              </Link>

              <Navlist className="nav-list">
                <Li>
                  <ToggleButton
                    data-testid="theme"
                    type="button"
                    onClick={toggleDarkButton}
                  >
                    <IconContext.Provider
                      value={{size: 30, color: isDark ? '#ffffff' : '#181818'}}
                    >
                      {isDark ? <FiSun /> : <BsMoon />}
                    </IconContext.Provider>
                  </ToggleButton>
                </Li>
                <Li>
                  <ProfileImage
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </Li>
                <Li>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        onClick={onLogout}
                        color={isDark ? '#f8fafc' : '#3b82f6'}
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <PopDiv>
                        <ModalPara>Are you sure, you want to logout?</ModalPara>
                        <ModalBtnDiv>
                          <CancelButton type="button" onClick={close}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton type="button" onClick={onLogout}>
                            Confirm
                          </ConfirmButton>
                        </ModalBtnDiv>
                      </PopDiv>
                    )}
                  </Popup>
                </Li>
              </Navlist>
            </Navbar>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Header)
