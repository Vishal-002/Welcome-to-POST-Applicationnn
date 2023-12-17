

// import React from "react";
// import "./styles.css"; // Import the CSS file

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="flex-container">
//       {/* Left Section */}
//       <div>
//         <img
//           src="/Images/Enitiate Logo.png"
//           alt="Logo"
//           className="logo"
//         />
//       </div>
//       <div className="left-section">
//         {/* Logo Image at the top left corner */}
//         {/* <img
//           src="/Images/Enitiate Logo.png"
//           alt="Logo"
//           className="logo"
//         /> */}

//         {/* Home Image in the middle left */}
//         <img
//           src="/Images/home pic.png"
//           alt="Home"
//           className="home-pic"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="right-section">
//         {/* Children in the middle right */}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;


// components/Layout.tsx
import React from "react";
import Image from "next/image"; // Import Image from next/image
import "./styles.css"; // Import the CSS file

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex-container">
      {/* Left Section */}
      <div>
        <Image
          src="/Images/Enitiate Logo.png"
          alt="Logo"
          className="logo"
          width={200}
          height={200}
        />
      </div>
      <div className="left-section">
        {/* Logo Image at the top left corner */}
        {/* <Image
          src="/Images/Enitiate Logo.png"
          alt="Logo"
          className="logo"
          width={/* set width as per your design */}
          {/* height={/* set height as per your design */}
        {/* /> */}

        {/* Home Image in the middle left */}
        <Image
          src="/Images/home pic.png"
          alt="Home"
          className="home-pic"
          width={400}
          height={400}
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Children in the middle right */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
