"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.css'
import Layout from '../components/Layout';
// import withAuth from '../HOC/withAuth'
import withAuth from '../HOC/withAuth';

// const getPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await response.json();
//   alert(posts)
//   return posts.slice(0, 100);
// };

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const limitedPosts = data.slice(0, 100);
        setPosts(limitedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Ensure that indexOfFirstPost is within a valid range
  if (indexOfFirstPost < 0 || indexOfFirstPost >= posts.length) {
    // Handle the case when indexOfFirstPost is out of range
    return <div>Error: Invalid page number.</div>;
  }

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
    <div>
      {/* <h1>Secret Posts Page</h1> */}
      <div className={styles['posts-container']}>
        {currentPosts.map((post: any) => (
          <div key={post.id} className={styles['post-card']}>
            <Link href={`/posts/${post.id}`} passHref>
            
                <h1>{post.title}</h1>
              
            </Link>
            <p className={styles.description}>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className={styles['pagination-container']}>
  <span className={styles['pagination-item']}>Page:</span>
  {Array.from({ length: totalPages }, (_, index) => (
    <span
      key={index + 1}
      onClick={() => handlePagination(index + 1)}
      className={`${styles['pagination-item']} ${
        currentPage === index + 1 ? styles['active'] : ''
      }`}
    >
      {index + 1}
    </span>
  ))}
</div>


      <div>
  {/* Use Link without <a> child */}
  {/* <Link href="/posts/[postId]" as={`/posts/${1}`} passHref>
          {/* <a>View Single Post</a> */}
          {/* <h1>View Single Post</h1> */}
  {/* {/* </Link> */ }
</div>
      </div>
      </Layout>
  );
};

export default PostsPage;
// export default withAuth(PostsPage);


