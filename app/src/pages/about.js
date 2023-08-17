import React from 'react';

const About = () => {
  const containerStyle = {
    margin: '0 400px',
    fontSize: '22px',
    textAlign: 'center',
  };

  const sectionStyle = {
    marginBottom: '40px',
  };

  const headlineStyle = {
    fontSize: '26px', // Increase the font size for headlines
    textAlign: 'left', // Align headlines to the left
    fontWeight: 'bold', // Add bold style to headlines
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <p style={headlineStyle}>
          About Me:
        </p>
        <p>
          Greetings! I'm Ryan, a dedicated plant enthusiast and tech-savvy individual who's always had a fascination with the natural world and the limitless possibilities of technology. With a genuine love for all things green and a knack for innovation, I've combined my passions to introduce you to "Howticulture." Join me as we embark on a journey to blend the beauty of nature with the power of digital solutions. I'm excited to share my knowledge, connect with fellow plant aficionados, and help you create a thriving green haven in both your physical and digital spaces.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headlineStyle}>
          Introducing Howticulture: Your Botanical Digital Companion
        </p>
        <p>
          Welcome to Howticulture, your one-stop destination for all your plant-related needs. Just like having a personal gardening expert in your pocket, Howticulture is designed to simplify your plant care experience, foster a strong community, and empower you to nurture your green companions with confidence.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headlineStyle}>
          Plant ID and Care Made Easy
        </p>
        <p>
          Ever found yourself intrigued by an unfamiliar plant? With Howticulture's state-of-the-art plant identification tool, all you need is a snapshot. Snap a picture of any plant, and let our smart technology identify it for you. But that's just the beginning. We'll provide you with detailed care instructions, from watering and lighting to humidity levels and seasonal tips, ensuring your plants flourish under your care.
        </p>
      </div>

      {/* Continue breaking up the content into separate sections */}

      <div style={sectionStyle}>
        <p style={headlineStyle}>
          Why Choose Howticulture
        </p>
        <p>
          Seamlessly identify and nurture plants with cutting-edge technology. Connect with a diverse community of plant enthusiasts to share insights and stories. Build your personal digital garden portfolio to monitor and enhance plant growth. Access a rich array of educational materials to expand your plant knowledge. Experience the fusion of nature and technology, elevating your gardening journey.
        </p>
        <p>
          Join me and fellow plant enthusiasts as we embrace the fusion of nature and technology through Howticulture. Let's celebrate the wonder of plants, create a thriving digital garden, and cultivate connections that transcend geographical boundaries. Together, we'll unlock the endless possibilities that arise when technology meets horticulture.
        </p>
      </div>
    </div>
  );
}

export default About;