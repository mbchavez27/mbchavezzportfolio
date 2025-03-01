import NavBar from '../components/navbar/navbar'
import PageRouter from '../components/pagerouter'
export default function Layout() {
  return (
    <>
      <div className="bg-[#0a0a0a] min-h-screen text-[#BFBFBF]">
        <NavBar></NavBar>
        <PageRouter></PageRouter>
      </div>
    </>
  )
}
