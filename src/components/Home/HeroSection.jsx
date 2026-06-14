import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
    return (
      <div className="container mt-3">
            <div className="card shadow-lg border-0 shadow overflow-hidden">
                <div className="row g-0">

                    {/* Left side */}
                    <div className="col-md-6  align-items-center justify-content-center bg-info text-white p-5">
                        <h3 className="fw-bold mt-5">
                            DEvcON
                        </h3>
                        <h5>
                            Let us take your Development journey a Notch higher!
                        </h5>
                        <button className="btn btn-danger mt-3 fw-bold">
                        <span className="me-3 ">Get Started </span> <FaArrowRight />
                        </button>
                    </div>

                    {/* Right side */}
                    <div
                        className="col-md-6"
                        style={{
                            backgroundImage: "url('../../public/img.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "300px",
                        }}
                    ></div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;