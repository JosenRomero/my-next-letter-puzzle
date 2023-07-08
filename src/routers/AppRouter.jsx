import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import PlayPage from "../pages/PlayPage"
import NotFoundPage from "../pages/NotFoundPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/'>
            <Route index element={<PlayPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter
