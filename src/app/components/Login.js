// // components/Login.js
// "use client";

// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase-config";
// import { useRouter } from "next/navigation"; // Import useRouter from next/router

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter(); // Initialize the router

//   const handleLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       console.log("User logged in:", user);

//       // Display success alert
//       alert("Login successful!");
//       // Redirect to "/posts" after successful login
//       router.push("/website");
//     } catch (error) {
//       console.error("Error logging in:", error.message);

//       // Display error alert
//       alert("Login failed. Please check your credentials.");
//     }
//   };

//   const handleSignUpRedirect = () => {
//     // Redirect to the sign-up page when the user clicks the link/button
//     router.push("/signup");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-8 border rounded shadow">
//       <h1 className="text-2xl font-semibold mb-4">Login</h1>
//       <form>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="mt-1 p-2 w-full border rounded text-black"
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="mt-1 p-2 w-full border rounded text-black"
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="button"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </form>

//       {/* Link or button to redirect to the sign-up page */}
//       <div className="mt-4">
//         <p className="text-sm text-gray-600">
//           Don't have an account?{" "}
//           <button
//             type="button"
//             className="text-blue-500 hover:underline focus:outline-none"
//             onClick={handleSignUpRedirect}
//           >
//             Sign up here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// components/Login.js

"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Display success alert
      alert("Login successful!");
      // Redirect to "/posts" after successful login
      router.push("/website");
    } catch (error) {
      console.error("Error logging in:", error.message);

      // Display error alert
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignUpRedirect = () => {
    // Redirect to the sign-up page when the user clicks the link/button
    router.push("/signup");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded text-black"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded text-black"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>

      {/* Link or button to redirect to the sign-up page */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={handleSignUpRedirect}
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
