import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();

  }


  return (
    <div className='header'>
        

        <div className="header-left">
            {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" /> */}
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

            <div className="header-search">
                <SearchIcon />
                <input placeholder='Search' type="text" />

            </div>

        </div>
        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://pbs.twimg.com/profile_images/1599300882906382339/hFTxu-6N_400x400.jpg" title="Logout" 
            onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header