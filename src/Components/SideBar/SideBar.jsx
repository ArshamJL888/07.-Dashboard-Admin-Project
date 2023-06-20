import React from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { NavLink } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>

        <div className='sidebar-menu'>
          <h4 className='sidebar-title'>Dashboard</h4>
          <ul className='sidebar-list'>
            <NavLink to='/' className='item-link'>
              <li className='sidebar-list-item'>
                <LineStyleIcon className='sidebar-icon' />
                Home
              </li>
            </NavLink>

            <NavLink to='/' className='item-link'>
              <li className='sidebar-list-item'>
                <TimelineIcon className='sidebar-icon' />
                Analytics
              </li>
            </NavLink>

            <NavLink to='/products' className='item-link'>
              <li className='sidebar-list-item'>
                <TrendingDownIcon className='sidebar-icon' />
                Sales
              </li>
            </NavLink>

          </ul>
        </div>

        <div className='sidebar-menu'>
          <h4 className='sidebar-title'>Quick Menu</h4>
          <ul className='sidebar-list'>
            <NavLink to='/users' className='item-link'>
              <li className='sidebar-list-item'>
                <PermIdentityIcon className='sidebar-icon' />
                Users
              </li>
            </NavLink>

            <NavLink to='/new-user' className='item-link'>
              <li className='sidebar-list-item'>
                <PersonAddAltIcon className='sidebar-icon' />
                New User
              </li>
            </NavLink>

            <NavLink to='/products' className='item-link'>
              <li className='sidebar-list-item'>
                <StorefrontIcon className='sidebar-icon' />
                Products
              </li>
            </NavLink>

            <NavLink to='/transactions' className='item-link'>
              <li className='sidebar-list-item'>
                <AttachMoneyIcon className='sidebar-icon' />
                Transactions
              </li>
            </NavLink>

            <NavLink to='/' className='item-link'>
              <li className='sidebar-list-item'>
                <BarChartIcon className='sidebar-icon' />
                Reports
              </li>
            </NavLink>

          </ul>
        </div>


        <div className='sidebar-menu'>
          <h4 className='sidebar-title'>Notifications</h4>
          <ul className='sidebar-list'>
            <NavLink to='/' className='item-link'>
              <li className="sidebar-list-item">
                <MailOutlineIcon className="sidebar-icon" />
                Mail
              </li>
            </NavLink>

            <NavLink to='/' className='item-link'>
              <li className="sidebar-list-item">
                <DynamicFeedIcon className="sidebar-icon" />
                FeedBack
              </li>
            </NavLink>

            <NavLink to='/' className='item-link'>
              <li className="sidebar-list-item">
                <ChatBubbleOutlineIcon className="sidebar-icon" />
                Messages
              </li>
            </NavLink>

          </ul>
        </div>

        <div className='sidebar-menu'>
          <h4 className='sidebar-title'>Staff</h4>
          <ul className='sidebar-list'>
            <NavLink to='/' className='item-link'>
              <li className="sidebar-list-item">
                <WorkOutlineIcon className="sidebar-icon" />
                Manage
              </li>
            </NavLink>

            <NavLink to='/' className='item-link'>
              <li className="sidebar-list-item">
                <ReportIcon className="sidebar-icon" />
                Reports
              </li>
            </NavLink>

          </ul>
        </div>

      </div>
    </div>
  )
}
