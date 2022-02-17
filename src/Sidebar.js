import { Avatar } from '@material-ui/core';
import React from 'react'
import { selectUser } from './features/userSlice';
import './Sidebar.css';
import { useSelector } from 'react-redux';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar-recentItem'>
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg?auto=format%2Ccompress&dpr=1' alt='' />
        <Avatar src={user.photoUrl} className='sidebar-avatar' >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar-stats'>
        <div className='sidebar-stat'>
          <p>Who viewed you</p>
          <p className='sidebar-statNumber'>5,089</p>
        </div>
        <div className='sidebar-stat'>
          <p>Views on post</p>
          <p className='sidebar-statNumber'>10,089</p>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>

    </div>
  )
}

export default Sidebar
