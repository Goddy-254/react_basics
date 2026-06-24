import { useState } from "react";
import { toast } from "react-toastify";

const CreateBlog = () => {

    const [blogTitle, setTitle] = useState('');
    const [blogAuthor, setAuthor] = useState('');
    const [blogImage, setImage] = useState('');
    const [blogCategory, setCategory] = useState('');
    const [blogComments, setComments] = useState('');

    const handleCreateBlog= (e)=> {
        e.preventDefault();
        const blog = {blogTitle,blogAuthor,blogImage,blogCategory,blogComments};
     
        try{
            fetch("http://localhost:3000/blogs",{
                method:"POST",
                headers :{"Content-Type":"application/JSON"},
                body:JSON.stringify(blog)

            });

            toast.success("Blog Created Succesfully");
        }
        catch(error)
        {
            toast.error("cannot create blog")
        }
    }

    return (
        <div className="container mt-4">
            <h3 className="text-center text-danger">Create Blogs</h3>
            <div className="row justify-content-center m-4">
                <div className="col-md-7 card p-4">
                    <form onSubmit={handleCreateBlog}>
                        <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            required
                            id="floatingInput"
                            placeholder="Blog Title"
                            value={blogTitle}
                            onChange={(e) => setTitle(e.target.value)
                            } />
                        <label htmlFor="floatingInput">Blog Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            required
                            id="floatingInput"
                            placeholder="Blog Author"
                            value={blogAuthor}
                            onChange={(e) => setAuthor(e.target.value)} />
                        <label htmlFor="floatingInput">Blog Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            required
                            id="floatingInput"
                            placeholder="Blog Image URL"
                            value={blogImage}
                            onChange={(e) => setImage(e.target.value)} />
                        <label htmlFor="floatingInput">Blog Image URL</label>
                    </div>
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label="Large select example"
                        required
                        value={blogCategory}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Select a category</option>
                        <option >React Framework</option>
                        <option >Node Javascript</option>
                        <option >Next Framework</option>
                        <option >Laravel Framework</option>
                    </select>

                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: "100px" }}
                            value={blogComments}
                            onChange={(e) => setComments(e.target.value)} 

                            ></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    <button  className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default CreateBlog;