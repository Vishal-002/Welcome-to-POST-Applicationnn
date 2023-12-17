
// components/withAuth.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if the user is authenticated (you can use your authentication logic here)
      const isAuthenticated = false; // Replace with your authentication logic

      if (!isAuthenticated) {
        // Redirect to login if not authenticated
        router.push('/');
      }
    }, [router]);

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;


// // components/withAuth.tsx
// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux_component/store';

// const withAuth = (WrappedComponent: React.ComponentType) => {
//   const AuthComponent: React.FC = (props) => {
//     const router = useRouter();

//     // Use the useSelector hook to get the current state from the Redux store
//     const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

//     useEffect(() => {
//       // Check if the user is authenticated using the state from Redux
//       if (!isLoggedIn) {
//         // Redirect to login if not authenticated
//         router.push('/');
//       }
//     }, [router, isLoggedIn]);

//     // Render the wrapped component if authenticated
//     return <WrappedComponent {...props} />;
//   };

//   return AuthComponent;
// };

// export default withAuth;
