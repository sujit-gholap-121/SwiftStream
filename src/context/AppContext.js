import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  toggleDarkButton: () => {},
  savedVideos: [],
  toggleSavedVideos: () => {},
  activeTab: 'Home',
  updateActiveTab: () => {},
})

export default AppContext
