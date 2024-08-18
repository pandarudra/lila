import { BrowserRouter as Router, Route, Routes, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/signIn",
      element:<SignIn/>
    }
  ])
  return (
    <RouterProvider router={router} />
    )
}

export default App
