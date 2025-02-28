import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}
