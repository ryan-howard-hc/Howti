import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../public/styles.css';
import '../../public/me.png';
import '../../public/heart.png';
import '../../public/plant.png';
import '../../public/research.png';
import Layout from './layout';
import '../styles/global.module.css';


const About = () => {
    
    return (
        <div style={{backgroundColor: '#ECFAF5', minHeight: '100vh' }}>

        <Layout>
        <div className="text-center">
        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="./research.png" alt="Research" style={{ width: '100px', height: '100px', marginRight: '50px', border: '5px solid rgba(128, 128, 128, 0.1)'  }} />
            <h1     style={{
                borderBottom: '1px solid #000',
                borderTop: '1px solid #000',
                padding: '10px 0',
                fontFamily: 'JFWildWood, sans-serif',
                fontSize: '80px'
              }} className="howticulture-title">Howticulture</h1>
              <img src="./plant.png" alt="Plant" style={{  width: '100px', height: '100px', marginLeft: '50px', border: '5px solid rgba(128, 128, 128, 0.1)' }} />
              </div>
    </div>
    
            
            <div style={{ marginTop: '40px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', margin:0, fontFamily: 'ClimbingPlant' }}>About Me:</h2>
                    </div>
                    <div className="col-7">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Greetings! I'm Ryan, a dedicated plant enthusiast and tech-savvy individual who's always had a fascination with the natural world and the limitless possibilities of technology. With a genuine love for all things green and a knack for innovation, I've combined my passions to introduce you to "Howticulture." Join me as we embark on a journey to blend the beauty of nature with the power of digital solutions. I'm excited to share my knowledge, connect with fellow plant aficionados, and help you create a thriving green haven in both your physical and digital spaces.
                        </p>
                    </div>
                    <div className="col-2">
                    <div className="rounded-circle" style={{ width: "375px", height: "375px", position: "relative", overflow: "hidden", margin: "0 auto" }}>
                        <div className="rounded-circle" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex" }}>
                            <img src="./me.png" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50%" }} alt="Profile" />
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'ClimbingPlant' }}>Howticulture:</h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Welcome to Howticulture, your one-stop destination for all your plant-related needs. Just like having a personal gardening expert in your pocket, Howticulture is designed to simplify your plant care experience, foster a strong community, and empower you to nurture your green companions with confidence.
                        </p>
                    </div>
                </div>
            </div><div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'ClimbingPlant' }}>ID and Care Made Easy:</h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Ever found yourself intrigued by an unfamiliar plant? With Howticulture's state-of-the-art plant identification tool, all you need is a snapshot. Snap a picture of any plant, and let our smart technology identify it for you. But that's just the beginning. We'll provide you with detailed care instructions, from watering and lighting to humidity levels and seasonal tips, ensuring your plants flourish under your care.
                        </p>
                    </div>
                </div>


            </div><div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-center">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'ClimbingPlant' }}>Cultivate Connection:</h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Welcome to our vibrant community, where plant lovers unite. Create your personalized profile, showcase your plant collection, and explore the collections of fellow enthusiasts. Engage in conversations on our forum, exchange advice, and share your plant triumphs. From newbie gardeners seeking guidance to seasoned horticulturalists imparting wisdom, our community is a hub of shared passion and knowledge.
                        </p>
                    </div>
                </div>
            </div><div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px' , fontWeight: 'bold', fontFamily: 'ClimbingPlant'}}>Plantfolio: </h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Bid farewell to lost plant labels and forgotten care routines. Howticulture's Plantfolio feature lets you build a digital portfolio of your plants. Record growth milestones, jot down care notes, and set reminders for essential tasks. Whether you're nurturing a tiny succulent or a sprawling monstera, your Plantfolio ensures your plants get the attention they deserve.
                        </p>
                    </div>
                </div>
            </div><div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'ClimbingPlant' }}>Learn and Flourish:</h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px', fontFamily: 'Verdana' }}>
                            Our curated collection of articles, videos, and guides is designed to educate, inspire, and elevate your plant expertise. Dive into the secrets of successful propagation, understand the art of soil composition, or learn the subtleties of different pruning techniques. With Howticulture, the learning never stops.
                        </p>
                    </div>
                </div>
            </div><div style={{ marginTop: '80px' }} className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'ClimbingPlant' }}>Why Choose Us:</h2>
                    </div>
                    <div className="col-9">
                        <p style={{ fontSize: '25px' , fontFamily: 'Verdana'}}>
                            Seamlessly identify and nurture plants with cutting-edge technology. Connect with a diverse community of plant enthusiasts to share insights and stories. Build your personal digital garden portfolio to monitor and enhance plant growth. Access a rich array of educational materials to expand your plant knowledge. Experience the fusion of nature and technology, elevating your gardening journey.
                        </p>
                        <p style={{ fontSize: '25px', marginTop: '30px' , fontFamily: 'Verdana'}}>
                            Join me and fellow plant enthusiasts as we embrace the fusion of nature and technology through Howticulture. Let's celebrate the wonder of plants, create a thriving digital garden, and cultivate connections that transcend geographical boundaries. Together, we'll unlock the endless possibilities that arise when technology meets horticulture.
                        </p>
                    </div>
                </div>
            </div></Layout>
            </div>
    );
}

export default About;

