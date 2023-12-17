// // // components/SignUp.js
// // "use client";

// // import { useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase-config";

// // const SignUp = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSignUp = async () => {
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       const user = userCredential.user;
// //       alert("User signed up:", user);
// //     } catch (error) {
// //       console.error("Error signing up:", error.message);
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
// //       <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
// //       <form>
// //         <div className="mb-4">
// //           <label
// //             htmlFor="email"
// //             className="block text-sm font-medium text-gray-600"
// //           >
// //             Email Address
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             className="mt-1 p-2 w-full border rounded"
// //             placeholder="Enter your email"
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label
// //             htmlFor="password"
// //             className="block text-sm font-medium text-gray-600"
// //           >
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             className="mt-1 p-2 w-full border rounded"
// //             placeholder="Enter your password"
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button
// //           type="button"
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           onClick={handleSignUp}
// //         >
// //           Sign Up
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignUp;

// "use client";

// // components/SignUp.js
// import { useState } from "react";
// import { signUpWithEmailAndPassword } from "../firebase-config";
// import { addUserToFirestore } from "../firebase-config";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [profession, setProfession] = useState("");

//   const handleSignUp = async () => {
//     try {
//       // Create a new user with email and password
//       const user = await signUpWithEmailAndPassword(email, password);

//       // Add user details to Firestore
//       await addUserToFirestore(email, password, name, profession);

//       console.log("User registered successfully:", email, name, profession);
//       // You can also redirect to another page or display a success message to the user
//     } catch (error) {
//       console.error("Error registering user:", error.message);
//       // Handle error (display error message to the user, etc.)
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
//       <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
//       <form>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="mt-1 p-2 w-full border rounded text-black"
//             placeholder="Enter your name"
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
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
//             htmlFor="profession"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Profession
//           </label>
//           <input
//             type="text"
//             id="profession"
//             className="mt-1 p-2 w-full border rounded text-black"
//             placeholder="Enter your profession"
//             onChange={(e) => setProfession(e.target.value)}
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
//           onClick={handleSignUp}
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


"use client";
// components/SignUp.tsx
import React, { useState } from "react";
import { signUpWithEmailAndPassword } from "../firebase-config";
import { addUserToFirestore } from "../firebase-config";
import Layout from "../Laayout/Layout";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [profession, setProfession] = useState<string>("");

  const handleSignUp = async () => {
    try {
      // Create a new user with email and password
      const user = await signUpWithEmailAndPassword(email, password);

      // Add user details to Firestore
      await addUserToFirestore(email, password, name);

      console.log("User registered successfully:", email, name, profession);
      // You can also redirect to another page or display a success message to the user
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error (display error message to the user, etc.)
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded text-black"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            htmlFor="profession"
            className="block text-sm font-medium text-gray-600"
          >
            Profession
          </label>
          <input
            type="text"
            id="profession"
            className="mt-1 p-2 w-full border rounded text-black"
            placeholder="Enter your profession"
            onChange={(e) => setProfession(e.target.value)}
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
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default SignUp;
