import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/footer"
import Navbar from "./Navbar"
import HomePage from "./pages/Home/HomePage"
import NewBlog from "./pages/NewBlog/newblog";


function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/newblog" element={<NewBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
