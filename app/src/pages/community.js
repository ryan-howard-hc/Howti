import React from 'react';
import '../../public/heart.png';
import '../../public/chat.png';
import Layout from './layout';


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
        marginLeft: '60px',
    };

    return (
        <Layout>
        <div className="container">
        <div className="row justify-content-center mb-4 mt-4">
        <div className="col-md-8 col-7">
            <div style={{ marginLeft: '50px' }}> 
                <h2 className="community-title">Community</h2>
            </div>
        </div>
        <div className="col-md-2 col-2 text-end">
            <div style={{ marginRight: '50px' }}>
                <a href="/login" className="btn btn-primary">Login</a>
            </div>
        </div>
    </div>

            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-3">


                                <div style={tinyContainerStyle}>
                                    <a href="heart-link">
                                        <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <a href="chat-link">
                                        <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>


                            <div className="col-md-3 col-12">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-6 col-12">
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
                <div className="col-md-10 col-12">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-3">

                                <div style={tinyContainerStyle}>
                                    <a href="heart-link">
                                        <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <a href="chat-link">
                                        <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-12">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-6 col-12">
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
                <div className="col-md-10 col-12">
                    <div className="card mb-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-3">

                                <div style={tinyContainerStyle}>
                                    <a href="heart-link">
                                        <img src="./heart.png" alt="Heart" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>3</span>
                                </div>
                                <div style={tinyContainerStyle}>
                                    <a href="chat-link">
                                        <img src="./chat.png" alt="Chat" style={iconStyle} />
                                    </a>
                                    <span style={counterStyle}>2</span>
                                </div>
                            </div>

                            <div className="col-md-3 col-12">
                                <img src="your-image-url.jpg" alt="Community" className="img-fluid" />
                            </div>
                            <div className="col-md-6 col-12">
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
        </Layout>
    );
}

export default Community;