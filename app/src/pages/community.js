import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/heart.png';

const Community = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mb-4">
                <div className="col-7">
                    <h2 className="community-title">Community</h2>
                </div>
                <div className="col-2 text-end">
                    <a href="/login" className="btn btn-primary">Login</a>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-1 text-center">
                                <img src="./heart.png" alt="Heart" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Here's my plant!</h5>
                                    <p className="card-text">
                                        Blah blah blah
                                    </p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-1 text-center">
                                <img src="./heart.png" alt="Heart" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Here's my plant!</h5>
                                    <p className="card-text">
                                        Blah blah blah
                                    </p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-9">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-1 text-center">
                                <img src="./heart.png" alt="Heart" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Here's my plant!</h5>
                                    <p className="card-text">
                                        Blah blah blah
                                    </p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Community;