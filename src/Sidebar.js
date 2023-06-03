import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser)


    const recentItems = (topic) => (
        <div className="sidebar-recentItems">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="" />
            <Avatar src={user?.photoUrl} className='sidebar-avatar'></Avatar>
            <h2>{user?.displayName}</h2>
            <h4>{user?.email}</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className='sidebar-statNumber'>{Math.floor(Math.random() * 5000)}</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on Post</p>
                <p className='sidebar-statNumber'>{Math.floor(Math.random() * 5000)}</p>
            </div>
        </div>


        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItems("reactjs")}
            {recentItems("programming")}
            {recentItems("softwareengineering")}
            {recentItems("design")}
            {recentItems("development")}
            {recentItems("remotework")}
        </div>
    </div>
  )
}

export default Sidebar