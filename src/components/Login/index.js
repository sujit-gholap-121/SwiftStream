import {Component} from 'react'
import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'
import './index.css'
import SubmitButton from './style'

class Login extends Component {
  state = {
    showPassword: false,
    errorStatus: '',
    errorMsg: '',
    username: '',
    password: '',
  }

  onLogin = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      this.onSuccess(result.jwt_token)
    } else {
      this.onFailure(result.error_msg)
    }
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorStatus: true, errorMsg})
  }

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  updatePasswordVisibility = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.onLogin()
  }

  render() {
    const {showPassword, password, username, errorStatus, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Route component={() => <Redirect to="/" />} />
    }
    return (
      <div className="login-body">
        <div className="login-card">
          <img
            className="login-img"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />

          <form className="login-form" onSubmit={this.onFormSubmit}>
            <div>
              <label className="login-form-label" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input
                id="username"
                value={username}
                onChange={this.updateUsername}
                className="login-form-input"
                placeholder="Username"
                type="text"
              />
            </div>

            <div>
              <label className="login-form-label" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                id="password"
                value={password}
                onChange={this.updatePassword}
                className="login-form-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />

              <div className="show">
                <input
                  checked={showPassword}
                  onClick={this.updatePasswordVisibility}
                  className="check-input"
                  id="show"
                  type="checkbox"
                />
                <label className="check-label" htmlFor="show">
                  Show Password
                </label>
              </div>
              <SubmitButton className="login-button" type="submit">
                Login
              </SubmitButton>
              {errorStatus && <p className="login-error">{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
