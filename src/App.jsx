import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import appStore from './utils/Store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './pages/WatchPage'
import SearchPage from './pages/SearchPage'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body />,
      children: [
        {
          path:"/",
          element:<MainContainer />
        },
        {
          path:"/watch",
          element:<WatchPage />
        },
        {
          path:"/search",
          element:<SearchPage />
        }
      ]
    }
  ])

  return (
    <>
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
     </Provider>   
 
    </>
  )
}

export default App
