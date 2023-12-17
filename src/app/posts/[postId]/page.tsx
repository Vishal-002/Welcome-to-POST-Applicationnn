
"use client";

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/';
import { useRouter } from 'next/navigation';
// import styles from './styles.module.css';

const usePostId = () => {
  const router = useRouter();
  const  postId  = router;
  return postId;
};

const SinglePostPage = () => {
  const postId = 1; // Move it here
  console.log("-----");
  console.log(postId)
  console.log("--------");

  const [post, setPost] = useState(null);
  console.log(post);
  console.log("Data before fetching")

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        setPost(data);
        console.log("Data after fetching")
        console.log(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post}</h1>
      <p>{post}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SinglePostPage;



