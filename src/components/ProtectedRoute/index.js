import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Route component={() => <Redirect to="/login" />} />
  }
  return <Route {...props} />
}

export default ProtectedRoute
