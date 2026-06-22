import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {
    return (
        <div>
        <h4 className="border-bottom border-3 border-danger py-3">{title}</h4>
        {
            blogs.map((blog,index) => {
                return (
                    <div className="card m-2 p-2" key={blog.id}>{index + 1} . {blog.blogTitle } 
                    <p > {blog.blogcontent?.substring(0,100)}...</p>
                    <button className="btn btn-outline-primary">Read More</button>
                    </div>
                )
            })
        }
        </div>
        );
}

export default BlogList;
