//use workshop 2. Stranger's things for instruction on profile




import React from 'react';
<h1 style ={{color:"blue"}}>Welcome to Adam's Version of Stranger's Things!</h1>

const Profile = ({user}) => {
  const messages = user.messages;
  const userID = user._id;

  return (
    <div>
      <div>
    <h1>Profile Page</h1>
    {
      messages && messages.map(message => {
        const fromUserID = message.fromUser._id;
       
        if (userID !== fromUserID){
          return (
            <div key={message._id}></div>
          )
        }
        return (
          <div key={message._id}>{message.content}</div>
        )
      })
    }
    </div>
 </div>
  )
}


export default Profile;