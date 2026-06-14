import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/newblog">
                                    New Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Old Blogs
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;

// <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route path="/" element={<HomePage/>}/> 
//     <Route path="/newblog" element={<NewBlog/>}/>
//   </Routes>
// </BrowserRouter>