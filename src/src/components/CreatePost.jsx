import { createPost } from '../api';
import React, { useState } from 'react';

const CreatePost = ({ token,fetchPosts, navigate }) => {
 const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');
const [willDeliver, setWillDeliver] = useState('');
<h2 style ={{color:"blue"}}>Create Post !</h2>;
const newPost = {
  
    title:'New Title',
    description:'New Description',
    price:'Price',
    location:'New location',
    willDeliver:'False'
  }

  async function addPost() {
    const result = await createPost(token, newPost)
      fetchPosts();
      navigate('/posts')
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <>
     <form  className='form' onSubmit={(event) => {
      event.preventDefault();
      addPost();
   
    }}>
    <input
      class="createPost"
        type='text'
        placeholder='Title'
        onChange={(event) => setTitle(event.target.value)}
      />
       <input
      class="createPost"
      id='description'
        type='text'
        placeholder='Description'
        onChange={(event) => setDescription(event.target.value)}
      />
       <input
      class="createPost"
        type='text'
        placeholder='Price'
        onChange={(event) => setPrice(event.target.value)}
      />
       <input
      class="createPost"
        type='text'
        placeholder='Location'
        onChange={(event) => setLocation(event.target.value)}
      />
       <input
      class="createPost"
        type='checkbox'
        placeholder='Will deliver'
        onChange={(event) => setWillDeliver(event.target.checked)}
      />
    <button onClick={() => addPost()}>Add a New Post</button>
    </form>
    </>
  )
}
export default CreatePost;