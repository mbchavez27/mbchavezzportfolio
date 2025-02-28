import Layout from './layout/layout'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="font-inter">
          <Layout></Layout>
        </div>
      </BrowserRouter>
    </>
  )
}
