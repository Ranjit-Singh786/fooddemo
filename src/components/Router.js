import ErrorPage from './Error';
import About from './About';
import App from '../App';
import Body from './Body'
import {createBrowserRouter} from 'react-router-dom';
import RestruantDetail from './RestruantDetail';
import RestrantHead from './RestrantHead';
import InstaMart from './InstaMart';
const Router = createBrowserRouter([
    {
      path: "/",       
      element: <App />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"/",
          element:<Body />
        },
        {
          path:"/restaurants",
          element:<RestrantHead />,
          children:[
            {
                path:"kfc-jp-nagar-chandigarh/:id",
                element:<RestruantDetail />,
            }
          ]
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/instamart",
          element:<InstaMart />
        }
      ]
    },
  ]);

  export const route =  Router;