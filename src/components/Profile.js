import React, { Component } from 'react';

const Profile = props => {
    return ( 
        <div>
            <h1>Welcome Back, {props.profile.nickname}</h1>
            <img src={props.profile.picture} style={{borderRadius:100}}/>
        </div> );
}

export default Profile;