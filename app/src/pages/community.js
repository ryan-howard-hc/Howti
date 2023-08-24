import React, { useState, useEffect } from 'react';
import '../../public/heart.png';
import '../../public/chat.png';
import Layout from './layout';
import '../../public/explore.png'
import Link from 'next/link';

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


    const apiUrl = 'https://8000-ryanhowardh-howticultur-foibcbubkx6.ws-us104.gitpod.io/api';
    // Example: Fetching the list of users
    const fetchUsers = async () => {
        try {
            const response = await fetch(apiUrl + 'users/');
            if (response.ok) {
                const data = await response.json();
                console.log('Users:', data);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    
    // Call the fetchUsers function to fetch the list of users
    fetchUsers();

    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: null,
        imageUrl: '', 
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
    const [receivedImageUrl, setReceivedImageUrl] = useState('');

    useEffect(() => {
        // Define an async function to fetch community posts
        const fetchCommunityPosts = async () => {
            try {
                const response = await fetch('https://8000-ryanhowardh-howticultur-foibcbubkx6.ws-us104.gitpod.io/api/community-posts/');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch community posts');
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        };
    
        // Call the fetch function when the component mounts
        fetchCommunityPosts();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('content', postData.content);
        formData.append('image', postData.image); // Make sure this field name matches your Django form
    
        try {
            const response = await fetch('https://8000-ryanhowardh-howticultur-foibcbubkx6.ws-us104.gitpod.io/api/community-posts/', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                const responseData = await response.json();
                setReceivedImageUrl(responseData.image_url);
                // Update the image URL in the post data
                setPostData({
                    title: '',
                    content: '',
                    image: null,
                    imageUrl: responseData.image_url,
                });
    
                // Fetch the updated list of community posts
                fetchCommunityPosts();
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };



    return (
        <div style={background}>
            <Layout>
            {/* Header section */}
            <div className="container" style={{ marginTop: '50px' }}>
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
                                    onMouseEnter={event => event.target.style.backgroundColor = '#753a08'}
                                    onMouseLeave={event => event.target.style.backgroundColor = '#8B4510'}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create a New Post Form */}
            <div className="container col-md-9 col-9">
                <h2>Create a New Post</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={postData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={postData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit">Create Post</button>
                </form>

                {/* Display uploaded image if available */}
                {receivedImageUrl && (
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-9">
                            <h2>Uploaded Image</h2>
                            <img src={receivedImageUrl} alt="Uploaded" />
                        </div>
                    </div>
                )} 
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
                            
            </Layout>
        </div>
    );
}

export default Community;



// from django.http import HttpResponse
// from django.views.decorators.http import require_POST
// @require_POST
// def upload_file(request):
//     # Get the file from the request
//     file = request.FILES['file']
//     # Save the file to a location
//     with open('path/to/file', 'wb') as f:
//         f.write(file.read())
//     # Return a success response
//     return HttpResponse('File uploaded successfully.')

// <div className="row justify-content-center">
//     <div className="col-md-10 col-12">
//         <div className="card mb-4" style={communityCard}>
//             <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>

//                 <div className="col-md-2 col-2">
//                     <div style={tinyContainerStyle}>
//                         <a href="heart-link">
//                             <img src="./heart.png" alt="Heart" style={iconStyle} />
//                         </a>
//                         <span style={counterStyle}>3</span>
//                     </div>
//                     <div style={tinyContainerStyle}>
//                         <a href="chat-link">
//                             <img src="./chat.png" alt="Chat" style={iconStyle} />
//                         </a>
//                         <span style={counterStyle}>2</span>
//                     </div>
//                 </div>

//                 <div className="col-md-2 col-2">
//                     <img src="./explore.png" alt="Community" style={postedPic} className="img-fluid" />
//                 </div>

//                 <div className="col-md-5 col-5">
//                     <div className="card-body text-start" style={textbox}>
//                         <h5 className="card-title">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
//                         <p className="card-text">
//                             Blah blah blah
//                         </p>
//                     </div>
//                 </div>

//                 <div className="col-md-3 col-3 text-end">
//                     <div className="card-body">
//                         <a href="#" className="btn btn-lg rounded-pill " style={{ marginRight: '60px' }}>Learn More</a>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
// </div>

// {/* Display Posts */}
// <div className="row justify-content-center">
//     {posts.map((post, index) => (
//         <div key={index} className="col-md-10 col-12">
//             <div className="card mb-4">
//                 <div className="row g-0 align-items-center" style={{ marginTop: '23px' }}>
//                     {/* Card content */}
//                     <div className="col-md-2 col-2">
//                         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px', marginLeft: '50px' }}>
//                             <a href="heart-link">
//                                 <img src="./heart.png" alt="Heart" style={{ width: '30px', height: '30px', marginRight: '5px', marginBottom: '10px' }} />
//                             </a>
//                             <span style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '10px' }}>3</span>
//                         </div>
//                         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px', marginLeft: '50px' }}>
//                             <a href="chat-link">
//                                 <img src="./chat.png" alt="Chat" style={{ width: '30px', height: '30px', marginRight: '5px', marginBottom: '10px' }} />
//                             </a>
//                             <span style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '10px' }}>2</span>
//                         </div>
//                     </div>

//                     <div className="col-md-2 col-2">
//                         {/* Use the imageUrl from the post data */}
//                         <img src={post.imageUrl} alt="Community" style={{ width: '100px', height: '100px', borderRadius: '10px' }} className="img-fluid" />
//                     </div>

//                     <div className="col-md-5 col-5">
//                         <div className="card-body text-start" style={{ textAlign: 'left' }}>
//                             <h5 className="card-title">{post.title}</h5>
//                             <p className="card-text">{post.content}</p>
//                         </div>
//                     </div>

//                     <div className="col-md-3 col-3 text-end">
//                         <div className="card-body">
//                             <a href="#" className="btn btn-lg rounded-pill" style={{ marginRight: '60px' }}>Learn More</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>