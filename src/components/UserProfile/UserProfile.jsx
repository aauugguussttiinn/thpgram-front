import UserEditForm from 'components/UserEditForm/UserEditForm';
import React, { useState } from 'react';

const UserProfile = ({username, email}) => {
  
  const [editToggle, setEditToggle] = useState(false);
  const [toggleButtonText, setToggleButtonText] = useState("Edit");

  const togglebutton = () => {
    setEditToggle(!editToggle)
    if (!editToggle) {
      setToggleButtonText("Cancel")
    } else {
      setToggleButtonText("Edit")
    }
  }

  return (
    <div className="my-profile-container my-4">
      <button className="btn btn-warning px-1 py-0" onClick={ () => togglebutton() }> { toggleButtonText } </button>
      { editToggle ? (
        <UserEditForm username={ username } email={ email } />
      ) : (
        <>
          <ul>
            <li>Username : { username }</li>
            <li>Email : { email }</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default UserProfile;