import { useParams } from "react-router-dom"
import useFetch from "../../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BlogArticle = () => {

    const { id } = useParams();
    const redirect = useNavigate();
    const { allData: blogs, loading, error } = useFetch(`http://localhost:3000/blogs`)

    const  deleteBlog = async()=>{
    try{

       const responce = await axios.delete(`http://localhost:3000/blogs/${id}`);
       redirect("/");
       toast.success("Blog deleted")

    }catch(error){
      toast.error("Cannot Delete Blog")
    }
    }
    return (
        <div className="container">
            {loading && <h4 className="text-success fw-bold">Loading....</h4>}
            {error && <h4 className="text-danger fw-bold">{error.message}</h4>}
            <p>
                {blogs && blogs.blogTitle}
            </p>
            <h3>{blogs && blogs.blogAuthor}</h3>
            <img src={blogs?.blogImage} alt={blogs?.blogTitle} style={{ height: "80%", width: "400px" }} className="text-center mb-3" />
            <p>{blogs && blogs.blogcontent}</p>
            <button className="btn btn-danger btn-sm" onClick={deleteBlog}>
                Delete
            </button>
        </div>
    );
}

export default BlogArticle