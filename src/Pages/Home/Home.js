import React from 'react'
import './Home.css'
import Features from '../../Components/Features/Features'
import Chart from '../../Components/Chart/Chart'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import getXAxisData from '../../xAxisDatas'
import { useState, useEffect } from 'react'

export default function Home() {
  
  let allXAxisDatas = [];

  const [XAxisDataIsChange, XAxisDataIsChangeIsChange] = useState(false)

  const [XAxisDatas, setXAxisDatas] = useState(allXAxisDatas)

  useEffect(() => {
    allXAxisDatas = [];
    getXAxisData().then(data => {
      data.forEach(info => {
        allXAxisDatas.push({ XAxisID: info[0], ...info[1] })
      })
      setXAxisDatas(allXAxisDatas)
    })

  }, [XAxisDataIsChange])


  return (
    <div className='home-page'>
      <Features />
      <Chart grid title="Month Sale" data={XAxisDatas} dataKey="sale" />
      <div className='home-widget'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
