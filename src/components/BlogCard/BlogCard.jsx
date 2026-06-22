import { Link } from "react-router-dom";
const BlogCard = ({blogs, title}) => {

    return ( 
        <div>
          <h5>{title}</h5>
        {
        blogs.map((blog) => {
          return (
            <div className="card shadow-lg my-2" key={blog.id}>
              <div className="row">
                {/* image */}
                <div className="col-md-3">
                  <img
                    src={blog.blogImage}
                    alt={blog.blogTitle}
                    className="image-fluid"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%"
                    }}
                  />
                </div>
                {/* image details */}
                <div className="col-md-9">
                  <div className="text-danger">
                    {blog.blogTitle}
                  </div>
                  <div className="text-info">
                    {blog.blogAuthor}
                  </div>
                  <div className="text-muted">
                    {blog.blogcontent.substring(0, 30)}
                  </div>
                  <Link className="btn btn-outline-primary btn-sm me-3" to ={`/article/${blog.id}`}>
                    Read More..
                  </Link>
                  <button className="btn btn-outline-danger btn-sm">
                    Delete
                  </button>

                </div>


              </div>

            </div>
          )
        })
      }
        </div>
     );
}
 
export default BlogCard