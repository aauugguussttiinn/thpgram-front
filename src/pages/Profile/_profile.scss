import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'redux/actions/userActions';

import UserProfile from 'components/UserProfile/UserProfile';
import Loader from 'components/Loader/Loader';



const Profile = () => {

  const userState = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getUserProfile = async() => {
    setLoading(true)
    const token = Cookies.get('token')
  
    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await dispatch(setUser(cookiesConfig))
    setLoading(!loading)
  };

  useEffect(() => {
    getUserProfile();
    },
    [ userState.changed === false ]
  );

  return (
    <div className="profile container">
      { loading ? (
        <Loader type='spin' color='#454545' />
      ) : ( 
        ( userState.changed === false ? (
          <>
            <h1>Welcome to your profile page, { userState.username } !</h1>
            <div className="my-profile-container">
              <UserProfile username={ userState.username } email={ userState.email } />
            </div>
          </>
           ) : (
           <Redirect to={{ pathname: '/profile' }} />
           )
        ))
      }
    </div>
  );
};

export default Profile;