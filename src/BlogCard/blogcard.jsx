const BlogCard = () => {
    return (  
       <div className="container mt-3">
        <h4 className="text-center">Recent Blogs</h4>
           {
            blogs.map((blog) => {
                return(
                <div className="card shadow-lg my-2" key = {blog.id}>
                    <div className="row">
                        {/* image */}
                        <div className="col-md-3">
                            <img 
                                src={blog.blogImage} 
                                alt={blog.blogTitle}
                                className="image-fluid" 
                                style={{
                                    height : "100%",
                                    objectFit : "cover",
                                    width : "100%"
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
                               {blog.blogcontent}  
                            </div>

                        </div>


                    </div>

                </div>
                )
            })
           }
        </div>

    );
}
 
export default BlogCard;