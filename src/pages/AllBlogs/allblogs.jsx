import BlogCard from "../../components/BlogCard/blogcard";
import useFetch from "../../hook/useFetch";

const AllBlog = () => {

  const { allData: blogs, loading, error } = useFetch("http://localhost:3000/blogs")
  return (

    <div className="container">
      
      {loading && <h4 className="text-success fw-bold">Loading....</h4>}
      {error && <h4 className="text-success fw-bold">{error}</h4>}
      {blogs && <BlogCard blogs={blogs} />}
    </div>
  );
};

export default AllBlog;


