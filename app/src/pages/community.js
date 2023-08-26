import React, { useState, useEffect } from 'react';
import '../../public/heart.png';
import '../../public/chat.png';
import Layout from './layout';
import '../../public/explore.png'
import Link from 'next/link';
import { useGlobalState } from '../context/GlobalState';
import authHeader from '../services/auth.headers';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import axios from 'axios';
import AuthService from '../services/auth.service';


const generateRandomPostId = () => {
  return Math.random().toString(36).substr(2, 9); 
};

const Community = () => {


useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);
  const router = useRouter();
  const { state, dispatch } = useGlobalState();
  const iconStyle = {
    width: '30px',
    height: '30px',
    marginRight: '5px',
    marginBottom: "10px"
  };
  const counterStyle = {
    verticalAlign: 'middle',
    marginLeft: '5px',
    marginBottom: '10px'
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
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: null,
    user: '',
    postId: generateRandomPostId(), 
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPostData({
      ...postData,
      image: file,
    });
  };
  
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user = state.user.user_id;
    const formData = new FormData();
  
    formData.append('title', postData.title);
    formData.append('content', postData.content);
  
    if (postData.image) {
      try {
        const imgurResponse = await axios.post(
          'https://api.imgur.com/3/image',
          postData.image,
          {
            headers: {
              Authorization: `Client-ID c44e776feefaee1`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        const image_url = imgurResponse.data.data.link;
  
        formData.append('image_url', image_url);
  
        formData.append('postId', postData.postId);
        formData.append('user', user);
  
        const response = await axios.post(
          'https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/community-posts/',
          formData,
          {}
        );
  
        console.log('Post request successful:', response.data);
        setPostData({
          title: '',
          content: '',
          image: null,
          user: '',
          postId: generateRandomPostId(),
        });
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
  };
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/community-posts/');
        if (response.status === 200) {
          setPosts(response.data); // Assuming your API returns an array of posts
        } else {
          console.error('Failed to fetch community posts');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={background}>
      <Layout>
      {/* Header section */}
      <div className="col-12 col-md-12 container" style={{ marginTop: '50px' }}>
        <div className="row justify-content-center mb-4 mt-4">
          <div className="col-md-8 col-7">
            <div style={{ marginLeft: '50px', marginTop: '5px' }}>
              <h2 className="community-title" style={{ fontFamily: 'JFWildWood', fontSize: '80px', letterSpacing: '4px' }}>Community</h2>
            </div>
          </div>
          <div className="col-md-2 col-2 text-end">
            <div style={{ marginRight: '50px' }}>
              <div style={{ fontFamily: 'ClimbingPlant', marginBottom: '20px', marginTop: '30px' }}>
                <Link
                  href="/login"
                  style={{
                    transition: 'background-color 0.3s',
                    fontFamily: 'ClimbingPlant',
                    backgroundColor: '#8B4510',
                    color: '#fff',
                    borderColor: '#8B4513',
                    letterSpacing: '5px',
                    fontSize: '25px'
                  }}
                  className="btn btn-primary btn-lg rounded-pill"
                  onMouseEnter={event => event.target.style.backgroundColor = '#753A08'}
                  onMouseLeave={event => event.target.style.backgroundColor = '#8B4510'}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      
      <div className="row justify-content-center">
        <div className="col-md-5 col-12 mb-4" style = {{marginRight:'40px'}}>
        <h2 style ={{fontFamily: 'ClimbingPlant', fontWeight: 'bold'}}>Create a New Post</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3 ">
              <label style={{fontFamily:'KitschyRetro', letterSpacing: '3px', fontSize:'24px'}} htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                className="form-control "
              />
            </div>
    
            <div className="mb-3">
              <label style={{fontFamily:'KitschyRetro', letterSpacing: '3px', fontSize:'24px'}} htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={postData.content}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
    
            <div className="mb-3">
              <label style={{fontFamily:'KitschyRetro', letterSpacing: '3px', fontSize:'24px'}} htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary"
            style={{
              transition: 'background-color 0.3s',
              fontFamily: 'ClimbingPlant',
              backgroundColor: '#8B4510',
              color: '#fff',
              borderColor: '#8B4513',
              letterSpacing: '5px',
              fontSize: '25px'
            }}>Create Post</button>
          </form>
        </div>
    
        {postData.image && (
          <div className="col-md-2 col-12 mb-4">
            <h2 style ={{fontFamily: 'ClimbingPlant', fontWeight: 'bold'}}>Image Preview</h2>
            <img src={URL.createObjectURL(postData.image)} alt="Uploaded" className="img-fluid" />
          </div>
        )}
      </div>
    </div>
    
    

      <div className="row justify-content-center">
      <div className="col-md-10 col-12">
      {posts.map((post) => (
        <div className="card mb-4" style={communityCard} key={post.id}>
          <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>
            <div className="col-md-2 col-2">
              <div style={tinyContainerStyle}>
                <a href="heart-link">
                  <img src="./heart.png" alt="Heart" style={iconStyle} />
                </a>
                <span style={counterStyle}></span>
              </div>
              <div style={tinyContainerStyle}>
                <a href="chat-link">
                  <img src="./chat.png" alt="Chat" style={iconStyle} />
                </a>
                <span style={counterStyle}></span>
              </div>
            </div>
            <div className="col-md-2 col-2">
              <img src={post.image_url} alt={`Post ${post.title}`} style={postedPic} className="img-fluid" />
            </div>
            <div className="col-md-5 col-5">
              <div className="card-body text-start" style={textbox}>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.content}
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
      ))}
    </div>
    </div>
      </Layout>
    </div>
  );
}
export default Community;






// <div className="row justify-content-center">
//   <div className="col-md-10 col-12">
//     <div className="card mb-4" style={communityCard}>
//       <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>
//         <div className="col-md-2 col-2">
//           <div style={tinyContainerStyle}>
//             <a href="heart-link">
//               <img src="./heart.png" alt="Heart" style={iconStyle} />
//             </a>
//             <span style={counterStyle}>3</span>
//           </div>
//           <div style={tinyContainerStyle}>
//             <a href="chat-link">
//               <img src="./chat.png" alt="Chat" style={iconStyle} />
//             </a>
//             <span style={counterStyle}>2</span>
//           </div>
//         </div>
//         <div className="col-md-2 col-2">
//           <img src="./explore.png" alt="Community" style={postedPic} className="img-fluid" />
//         </div>
//         <div className="col-md-5 col-5">
//           <div className="card-body text-start" style={textbox}>
//             <h5 className="card-title">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
//             <p className="card-text">
//               Blah blah blah
//             </p>
//           </div>
//         </div>
//         <div className="col-md-3 col-3 text-end">
//           <div className="card-body">
//             <a href="#" className="btn btn-lg rounded-pill " style={{ marginRight: '60px' }}>Learn More</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// {/* Display Posts */}
// <div className="row justify-content-center">
//   {posts.map((post, index) => (
//     <div key={index} className="col-md-10 col-12">
//       <div className="card mb-4">
//         <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>
//           {/* Card content */}
//           <div className="col-md-2 col-2">
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px', marginLeft: '50px' }}>
//               <a href="heart-link">
//                 <img src="./heart.png" alt="Heart" style={{ width: '30px', height: '30px', marginRight: '5px', marginBottom: '10px' }} />
//               </a>
//               <span style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '10px' }}>3</span>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px', marginLeft: '50px' }}>
//               <a href="chat-link">
//                 <img src="./chat.png" alt="Chat" style={{ width: '30px', height: '30px', marginRight: '5px', marginBottom: '10px' }} />
//               </a>
//               <span style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '10px' }}>2</span>
//             </div>
//           </div>
//           <div className="col-md-2 col-2">
//             {/* Use the imageUrl from the post data */}
//             <img src={post.imageUrl} alt="Community" style={{ width: '100px', height: '100px', borderRadius: '10px' }} className="img-fluid" />
//           </div>
//           <div className="col-md-5 col-5">
//             <div className="card-body text-start" style={{ textAlign: 'left' }}>
//               <h5 className="card-title">{post.title}</h5>
//               <p className="card-text">{post.content}</p>
//             </div>
//           </div>
//           <div className="col-md-3 col-3 text-end">
//             <div className="card-body">
//               <a href="#" className="btn btn-lg rounded-pill" style={{ marginRight: '60px' }}>Learn More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>