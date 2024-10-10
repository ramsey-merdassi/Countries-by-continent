import Header from "./Components/Header";
import Continent from "./Components/Continent";
import Countries from "./Components/Countries";

import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from 'react-router-dom'

function App() {

  return (
      <>
              <Header/>
              <div className='flex'>
                  <BrowserRouter>
                      <div className='text-7xl text-red-500 pl-8'>
                      <Link className='text-blue-400' to='/africa'><Continent name='Africa'/></Link>
                      <Link to='/asia'><Continent name='Asia'/></Link>
                      <Link className='text-orange-600' to='/europe'><Continent name='Europe'/></Link>
                      <Link className='text-pink-600' to='/north-america'><Continent name='North America'/></Link>
                      <Link className='text-fuchsia-900' to='/oceania'><Continent name='Oceania'/></Link>
                      <Link className='text-amber-500' to='/south-america'><Continent name='South America'/></Link>
                      </div>
                      <div className='w-4/5 h-2/5 flex flex-wrap'>
                      <Routes>
                          <Route path='/africa' element={<Countries continent='Africa'/>}/>
                          <Route path='/asia' element={<Countries continent='Asia'/>}/>
                          <Route path='/europe' element={<Countries continent='Europe'/>}/>
                          <Route path='/north-america' element={<Countries continent='North America'/>}/>
                          <Route path='/oceania' element={<Countries continent='Oceania'/>}/>
                          <Route path='/south-america' element={<Countries continent='South America'/>}/>
                      </Routes>
                      </div>
                  </BrowserRouter>
              </div>
      </>
  )
}

export default App