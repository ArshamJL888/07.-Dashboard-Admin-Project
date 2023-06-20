import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import getNewMembers from '../../newMembers';
import { useState, useEffect } from 'react';
export default function WidgetSm() {


  let allNewMembers = [];

  const [newMembersIsChaneg, setNewMembersIsChaneg] = useState(false)

  const [newMembersData, setNewMembersData] = useState(allNewMembers);

  useEffect(() => {
    allNewMembers = [];
    getNewMembers().then(data => {
      data.forEach(info => {
        allNewMembers.push({ NewMwmberID: info[0], ...info[1] })
      })
      setNewMembersData(allNewMembers)
    })
  }, [newMembersIsChaneg])



  return (
    <div className='widget-sm'>
      <span className='wiget-sm-title'>New Members</span>
      <ul className='widget-sm-list'>
        {
          newMembersData.map(member => (
            <li key={member.id} className='widget-sm-list-item'>
              <img src={member.img} alt="member image" className='widget-sm-new-member-image' />
              <div className='widget-sm-new-member-info'>
                <span className='widget-sm-new-member-username'>{member.username}</span>
                <span className='widget-sm-new-member-userTitle'>{member.userTitle}</span>
              </div>
              <button className='widget-sm-btn'><VisibilityIcon className='widget-sm-icon' /></button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
