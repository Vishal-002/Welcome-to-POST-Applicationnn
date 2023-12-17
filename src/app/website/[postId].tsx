// // pages/website/[postId].tsx

// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './styles.module.css';

// const SinglePostPage = () => {
//   const router = useRouter();
//   const { postId } = router.query;
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//         const data = await response.json();
//         setPost(data);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     if (postId) {
//       fetchPost();
//     }
//   }, [postId]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles['single-post-container']}>
//       <h1>{post}</h1>
//       <p>{post}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default SinglePostPage;


// src/app/page.tsx or the relevant parent component
// /** @jsxImportSource @reactjs/react-next */
// import { useClient } from '@reactjs/react-next';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import PostsPage from './website';

// const MyPage = () => {
//   // useClient(); // Add this line to mark the parent component as a client component

//   return (
//     <div>
//       {/* Your page content */}
//       {/* <Login /> */}
//       {/* <SignUp /> */}
//       {/* <PostsPage /> */}
//     </div>
//   );
// };

// export default MyPage;
