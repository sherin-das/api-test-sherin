import './App.css'
import AxiosApiFetch from './AxiosApiFetch'

function App() {

  return (
    <>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
        <div style={{width:'700px',height:'600px'}} className='bg-primary border rounded-5'>
        <AxiosApiFetch/>
        </div>
     </div>
    </>
  )
}

export default App
