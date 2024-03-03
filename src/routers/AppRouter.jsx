import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import HomePage from "../pages/HomePage"
import PlayPage from "../pages/PlayPage"
import AchievementsPage from "../pages/AchievementsPage"
import NotFoundPage from "../pages/NotFoundPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='play' element={<PlayPage />} />
            <Route path='Achievements' element={<AchievementsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter
