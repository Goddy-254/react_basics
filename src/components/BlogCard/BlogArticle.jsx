import { useParams } from "react-router-dom"
import useFetch from "../../hook/useFetch";


const BlogArticle = () => {

    const { id } = useParams();
    const { allData: blogs, loading, error } = useFetch(`http://localhost:3000/blogs/${id}`)
    return (
        <div className="container">
            {loading && <h4 className="text-success fw-bold">Loading....</h4>}
            {error && <h4 className="text-success fw-bold">{error}</h4>}
            <p>
                {blogs && blogs.blogTitle}
            </p>
            <h3>{blogs && blogs.blogAuthor}</h3>
            <img src={blogs.blogImage} alt={blogs.blogTitle} style={{height:"80%",width:"400px"}} className="text-center mb-3" />
            <p>{blogs && blogs.blogcontent}</p>
        </div>
    );
}

export default BlogArticle