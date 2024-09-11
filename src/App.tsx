import React from 'react';

import profilepict from "./myprofilepicture.jpg";
import UserProfile from './UserProfile.tsx';

const user = {
  name: "이승원",
  email: "seung12@snu.ac.kr",
  bio: "컴퓨터공학부, 농구 좋아함, 와플스튜디오 22.5기",
  profilePicture: profilepict
};

function App() {
  return (
    <div className="App">
      <h1>User Profile</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
