import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import PostsContext from './Context/PostsContext.js'
import axios from 'axios'
import { BASE_API_URI } from './baseUrl.js'
import Home from './pages/Home'
import About from './pages/About'
import Index from './pages/Posts/PostPage.jsx'
import Show from './pages/Posts/PostDetails.jsx'
import Default from './layouts/Default'


function App() {

  const [posts, setPosts] = useState([])

  function fetchPosts() {

    axios.get(`${BASE_API_URI}/posts`)
      .then(res => {
        setPosts(res.data.filteredPosts)
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <PostsContext.Provider value={{ posts, setPosts, fetchPosts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/posts'>
              <Route path='' element={<Index />} ></Route>
              <Route path=':id' element={<Show />} ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>

  )
}

export default App