import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ClientProfile from './components/ClientProfile/ClientProfile.jsx';
import Auth from './modules/Auth';
import PostJob from './ClientProfile/ClientProfile.jsx';
import Map from './ClientProfile/Map.jsx';
import Description from './ClientProfile/Description.jsx';
import app from './components/app.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
    path: '/Dashboard',
    component: Dashboard
    },
    {
    path: '/ClientProfile/ClientProfile',
    component: ClientProfile
    },

    {
    path: '/ClientProfile/HomePage',
    component: HomePage
    },

    {
    path: '/ClientProfile/Base',
    component: Base
    },

    {
      path: '/ClientProfile/ClientProfile/PostJob',
      component: PostJob
    },

    {
      path: '/ClientProfile/ClientProfile/Map',
      component: Map
    },

    {
      path: '/ClientProfile/ClientProfile/Description',
      component: Description
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/App',
      component: App
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
