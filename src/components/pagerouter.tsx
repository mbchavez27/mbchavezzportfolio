import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Projects from '../pages/projects'
export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </>
  )
}
