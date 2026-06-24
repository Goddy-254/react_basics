const Contact = () => {
    return (
        <div className="container my-2">

            <div className="row justify-content-center">
                <div className="col-md-7 card shadow-lg p-4">
                    <form>
                        <h4 className="text-center p-3">Leave us a message</h4>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Leave us your name" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height:"200px"}}></textarea>
                            <label htmlFor="floatingTextarea">Leave us your message</label>
                        </div>

                        <button className="btn btn-primary mt-3">Submit message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;