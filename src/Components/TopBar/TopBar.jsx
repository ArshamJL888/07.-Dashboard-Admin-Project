import React from 'react'
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbar-container'>
        <div className='topbar-left'>
          <img className='logo-img' src="../images/logo4.png" alt="logo" />
        </div>
        <div className='topbar-right'>
          <div className='topbar-icon-container'>
            <NotificationsNoneIcon />
            <span className='TopIconBadge'>8</span>
            </div>
            <div className='topbar-icon-container'>
            <LanguageIcon />
            <span className='TopIconBadge'>5</span>
            </div>
            <div className='topbar-icon-container'>
            <SettingsIcon />
            <span className='TopIconBadge'>3</span>
          </div>
          <div className='user-img-container'>
            <img className='user-img' src="../images/team-5.jpg" alt="user image" />
          </div>
        </div>
      </div>
    </div>
  )
}
