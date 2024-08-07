import React from "react";
import "../Components/profile.css";

const user = {
  name: "sameera jayakodi",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const Profile = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"photo of " + user.name}
      />
    </>
  );
};

export default Profile;
