import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer"
import Navbar from "./Navbar"
import HomePage from "./pages/Home/HomePage"
import CreateBlog from "./pages/CreateBlog/createblog";
import BlogArticle from "./components/BlogCard/BlogArticle";
import AllBlog from "./pages/AllBlogs/allblogs";
import Contact from "./pages/Contact/contact";
import { ToastContainer, toast } from 'react-toastify';

function App() {


  return (
    <BrowserRouter>
    <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/createblog" element={<CreateBlog/>}/>
        <Route path="/allblog" element={<AllBlog/>}/>
        <Route path="/article/:id" element={<BlogArticle/>}/>
        <Route path= "/contact" element ={<Contact/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
