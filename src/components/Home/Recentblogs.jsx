
import useFetch from "../../hook/useFetch";
import BlogCard from "../BlogCard/blogcard";
import BlogList from "../BlogCard/BlogList";

const RecentBlogs = () => {

  const {allData:blogs,error,loading} = useFetch("http://localhost:3000/blogs")

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          {loading && <h4 className="text-success fw-bold">Loading....</h4>}
          {error && <h4 className="text-success fw-bold">{error}</h4>}
          <BlogCard blogs={blogs} title={"Recent Blogs"}/>
        </div>
        <div className="col-md-4">
          <BlogList blogs = {blogs} title = {"Trending Blogs"} />
        </div>
      </div>
    </div>

  );
}

export default RecentBlogs;