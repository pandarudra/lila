import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
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
    }
  ])
  return <RouterProvider router={router} />
}

export default App
