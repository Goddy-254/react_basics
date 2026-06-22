import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer"
import Navbar from "./Navbar"
import HomePage from "./pages/Home/HomePage"
// import CreateBlog from "./pages/CreateBlog/createblog";
import BlogArticle from "./components/BlogCard/BlogArticle";
import AllBlog from "./pages/AllBlogs/allblogs";


function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        {/* <Route path="/createblog" element={<CreateBlog/>}/> */}
        <Route path="/allblog" element={<AllBlog/>}/>
        <Route path="/article/:id" element={<BlogArticle/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
