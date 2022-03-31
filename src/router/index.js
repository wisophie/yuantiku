import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Home from '../views/Home/Home'
import Fast from '../views/Fast/Fast'
import User from '../views/User/User'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Choose from '@/views/Choose/Choose'
import Practice from '@/views/Practice/Practice'
const BaseRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => (
          <App>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/fast" component={Fast}></Route>
              <Route exact path="/user" component={User}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/choose/:code" component={Choose}></Route>
              <Route exact path="/practice" component={Practice}></Route>
            </Switch>
          </App>
        )}>
        </Route>
      </Switch>
    </Router>
  )
}

export default BaseRouter