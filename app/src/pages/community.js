import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/heart.png';
import '../../public/chat.png';



const Community = () => {

    const iconStyle = {
        width: '20px',  
        height: '20px', 
        marginRight: '5px',
    };

    const counterStyle = {
        verticalAlign: 'middle', 
        marginLeft: '5px',
    };

    const tinyContainerStyle = {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: '5px',
        marginLeft: '20px',
    };

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
                            <div className="col-md-3">
                                <div style={tinyContainerStyle}>
                                    <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ marginLeft: '-140px' }}>
                            <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                        </div>
                            <div className="col-md-6">
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
                            <div className="col-md-3">
                                <div style={tinyContainerStyle}>
                                    <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ marginLeft: '-140px' }}>
                            <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                        </div>
                            <div className="col-md-6">
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
                            <div className="col-md-3">
                                <div style={tinyContainerStyle}>
                                    <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ marginLeft: '-140px' }}>
                            <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                        </div>
                            <div className="col-md-6">
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