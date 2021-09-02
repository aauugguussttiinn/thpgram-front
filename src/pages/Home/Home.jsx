// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Cookies from "js-cookie";
// import { getPosts } from 'redux/actions/postActions';
// import Publication from 'components/Publication/Publication';

const Home = () => {
  
  // const userState = useSelector((state) => state.userReducer);
  // const posts = useSelector((state) => state.postReducer);
  // const detectUrlChange = window.location.pathname.split('/').pop();
  // const token = Cookies.get('token');

  // useEffect(() => {
  //   getPosts(token);
  //   },
  //   [detectUrlChange]
  // );
  
  return (
    <div className="home container d-flex row">
      <div className="col-3"></div>
        <p className="col-6">
          Welcome on My Social Network. This website is a training to Redux and React.
          We use auth and routing to create a small social media website.
        </p>
      <div className="col-3"></div>
      {/* { userState.user !== undefined && (
        <>
        <PostForm />
        <div className="content">
        <div className="post-container container">
          { posts[0] !== undefined && posts.map((publication) => <Publication publication={ publication.text } key={ publication.id } />) }
        </div>
      </div>
        </>
      )} */}
    </div>
  );
};

export default Home;