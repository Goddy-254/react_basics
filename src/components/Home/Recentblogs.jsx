import { useState } from "react";

const RecentBlogs = () => {

  const [blogs] = useState([
    {
      id: 1,
      "blogTitle": "reactJs",
      "blogImage": "https://plus.unsplash.com/premium_photo-1780828284483-57bf7c14defe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      "blogAuthor": "godfrey maina",
      "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem fugit voluptatibus repellendus omnis eveniet quasi adipisci eaque inventore. Temporibus maiores culpa error nisi voluptates explicabo incidunt esse dolore tempore alias. Magnam, culpa optio! Possimus a sed fugiat harum iste nihil rerum quidem eligendi ipsam dignissimos magnam ab, cumque explicabo."
    },
    {
      id: 2,
      "blogTitle": "NodeJs",
      "blogImage": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "blogAuthor": "victor",
      "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem fugit voluptatibus repellendus omnis eveniet quasi adipisci eaque inventore. Temporibus maiores culpa error nisi voluptates explicabo incidunt esse dolore tempore alias. Magnam, culpa optio! Possimus a sed fugiat harum iste nihil rerum quidem eligendi ipsam dignissimos magnam ab, cumque explicabo."
    },
    {
      id: 3,
      "blogTitle": "NextJs",
      "blogImage": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "blogAuthor": "macos",
      "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem fugit voluptatibus repellendus omnis eveniet quasi adipisci eaque inventore. Temporibus maiores culpa error nisi voluptates explicabo incidunt esse dolore tempore alias. Magnam, culpa optio! Possimus a sed fugiat harum iste nihil rerum quidem eligendi ipsam dignissimos magnam ab, cumque explicabo."
    },
    {
      id: 4,
      "blogTitle": "Laravel",
      "blogImage": "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "blogAuthor": "sam altman",
      "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem fugit voluptatibus repellendus omnis eveniet quasi adipisci eaque inventore. Temporibus maiores culpa error nisi voluptates explicabo incidunt esse dolore tempore alias. Magnam, culpa optio! Possimus a sed fugiat harum iste nihil rerum quidem eligendi ipsam dignissimos magnam ab, cumque explicabo."
    }
  ])
  return (
    <div className="container mt-3">
      <h4 className="text-center">Recent Blogs</h4>
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
                  <button className="btn btn-outline-primary btn-sm me-3">
                    Read More
                  </button>
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

export default RecentBlogs;