import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'

import AppContext from './context/AppContext'
import Login from './components/Login'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoPlayer from './components/VideoPlayer'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDark: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  toggleDarkButton = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  toggleSavedVideos = video => {
    const {savedVideos} = this.state
    const isFound = savedVideos.filter(ele => ele.id === video.id)
    if (isFound.length === 1) {
      const lt = savedVideos.filter(ele => ele.id !== video.id)
      this.setState({savedVideos: lt})
    } else {
      this.setState({savedVideos: [...savedVideos, video]})
    }
  }

  updateActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          savedVideos,
          activeTab,
          toggleDarkButton: this.toggleDarkButton,
          toggleSavedVideos: this.toggleSavedVideos,
          updateActiveTab: this.updateActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
