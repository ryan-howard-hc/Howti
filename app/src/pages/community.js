import React from 'react';
import '../../public/heart.png';
import '../../public/chat.png';
import Layout from './layout';
import '../../public/explore.png'

const Community = () => {

    const iconStyle = {
        width: '30px',
        height: '30px',
        marginRight: '5px',
        marginBottom: "10px"
        
    };

    const counterStyle = {
        verticalAlign: 'middle',
        marginLeft: '5px',
        marginBottom:'10px'
    };

    const tinyContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5px',
        marginLeft: '50px',
    };

    const background = {
        backgroundColor: '#ECFAF5'
    }

    const postedPic = {
        width: '100px',
        height: '100px',
        borderRadius: '10px'
        
    }

    const communityCard = {
        height: '150px',
        
        
    }
    
    const textbox = {
        textAlign: 'left'
    }

    return (
        <div style={background}>
        <Layout>
        <div className="container " style={{ marginTop: '50px' }}>
        <div className="row justify-content-center mb-4 mt-4" >
        <div className="col-md-8 col-7" >
            <div style={{ marginLeft: '50px' }}> 
                <h2 className="community-title" style={{fontFamily: 'ClimbingPlant'}}>Community</h2>
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
        <div className="card mb-4" style={communityCard}>
            <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>

                <div className="col-md-2 col-2">
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

                <div className="col-md-2 col-2">
                    <img src="./explore.png" alt="Community" style={postedPic} className="img-fluid" />
                </div>

                <div className="col-md-5 col-5">
                    <div className="card-body text-start" style={textbox}>
                        <h5 className="card-title">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                        <p className="card-text">
                            Blah blah blah
                        </p>
                    </div>
                </div>

                <div className="col-md-3 col-3 text-end">
                    <div className="card-body">
                        <a href="#" className="btn btn-lg rounded-pill " style={{ marginRight: '60px' }}>Learn More</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


<div className="row justify-content-center">
<div className="col-md-10 col-12">
    <div className="card mb-4" style={communityCard}>
        <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>

            <div className="col-md-2 col-2">
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

            <div className="col-md-2 col-2">
                <img src="./explore.png" alt="Community" style={postedPic} className="img-fluid" />
            </div>

            <div className="col-md-5 col-5">
                <div className="card-body text-start" style={textbox}>
                    <h5 className="card-title">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                    <p className="card-text">
                        Blah blah blah
                    </p>
                </div>
            </div>

            <div className="col-md-3 col-3 text-end">
                <div className="card-body">
                    <a href="#" className="btn btn-lg rounded-pill " style={{ marginRight: '60px' }}>Learn More</a>
                </div>
            </div>

        </div>
    </div>
</div>
</div>

<div className="row justify-content-center">
<div className="col-md-10 col-12">
    <div className="card mb-4" style={communityCard}>
        <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>

            <div className="col-md-2 col-2">
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

            <div className="col-md-2 col-2">
                <img src="./explore.png" alt="Community" style={postedPic} className="img-fluid" />
            </div>

            <div className="col-md-5 col-5">
                <div className="card-body text-start" style={textbox}>
                    <h5 className="card-title">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                    <p className="card-text">
                        Blah blah blah
                    </p>
                </div>
            </div>

            <div className="col-md-3 col-3 text-end">
                <div className="card-body">
                    <a href="#" className="btn btn-lg rounded-pill " style={{ marginRight: '60px' }}>Learn More</a>
                </div>
            </div>

        </div>
    </div>
</div>
</div>


        </div>
        </Layout>
        </div>
    );
}

export default Community;