import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Message from './components/Message'
import LayOut from './components/LayOut'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/signIn',
      element: <SignIn />
    },
    {
      path: '/forgotPassword',
      element: <ForgotPassword />
    },
    {
     path:"/layout",
     element:<LayOut/>,
     children:[

      
     ]

    }

  ])
  return <RouterProvider router={router} />
}

export default App
