import React from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState, useEffect } from 'react'
import { getUsers, editUser, deleteUser } from '../../AllUsers'

export default function UserList() {


  let allUsers = [];

  const [userisChange, setUserisChange] = useState(false)

  const [usersData, setUsersData] = useState(allUsers)


  useEffect(() => {
    allUsers = [];
    getUsers().then(data => {
      data.forEach(info => {
        allUsers.push({ userID: info[0], ...info[1] })
      })
      setUsersData(allUsers)
    })
  }, [userisChange])




  async function deleteUserHandler(userID) {
    await deleteUser(userID)
    setUserisChange(!userisChange)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      editable: true,
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'>
              <div className='users-list-user'>
                <img className='user-list-user-image' src={params.row.img} alt='user image' />
                {params.row.username}
              </div>
            </Link>
          </>
        )
      }
    },
    {
      field: 'userTitle',
      headerName: 'Title',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'transactions',
      headerName: 'Transactions',
      width: 160,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className='user-list-edit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='user-list-delete'
              onClick={() => deleteUserHandler(params.row.userID)}
            />
          </>
        )
      }
    },
  ]

  return (
    <div className='user-list'>
      <DataGrid
        rows={usersData}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
      />
    </div>
  )
}
