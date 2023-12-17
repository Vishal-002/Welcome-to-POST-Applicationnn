
"use client"; // Commenting this out as it's not recognized
import { useRouter } from 'next/navigation';
import Login from './components/Login';
// import Login from './components/Login';
import SignUp from './signup/page';
import Layout from './Laayout/Layout';
import { Provider } from 'react-redux';
import store from './redux_component/store';
import website from './website/page'
import withAuth from './HOC/withAuth';

const MyPage = () => {
  // Assuming you want to use useRouter, otherwise, you can remove this line
  // useRouter();

  return (
    <Provider store={store}>
      <Layout>
        {/* Include your other components here */}
        <Login />
        {/* <SignUp /> */}
        {/* <withAuth /> */}
      </Layout>
      
    </Provider>
  );
};

export default MyPage;
