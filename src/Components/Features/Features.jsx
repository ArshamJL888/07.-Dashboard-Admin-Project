import React, { useState } from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Features(prop) {

  const [data, setData] = useState([
    {
      id: 1,
      title: 'Revenue',
      cost: 2_450,
      rate: -11.4,
      sub: 'Compared to last month'
    },
    {
      id: 2,
      title: 'Sales',
      cost: 4_415,
      rate: -1.8,
      sub: 'Compared to last week'
    },
    {
      id: 3,
      title: 'Cost',
      cost: 2_250,
      rate: +2.4,
      sub: 'Compared to last month'
    },
    {
      id: 4,
      title: 'Stocks',
      cost: 8_512,
      rate: +7.2,
      sub: 'Compared to last day'
    },
  ])

  return (
    <div className='features'>
      {
        data.map(info => (
          <div key={info.id} className='feature-item'>
            <span className='feature-title'>{info.title}</span>
            <div className='feature-container'>
              <span className='feature-cost'>${info.cost}</span>
              <span className='feature-rate'>{info.rate}
                {
                  info.rate > 0 ? <ArrowUpwardIcon className='feature-icon positive' /> : <ArrowDownwardIcon className='feature-icon negative' />
                }
              </span>
            </div>
            <p className='feature-sub'>{info.sub}</p>
          </div>
        ))
      }
    </div>
  )
}
