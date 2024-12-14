import React from 'react'
import './style.css'
import { SubNav } from '../../components/Components'
import { Outlet } from 'react-router-dom'

export default function Elreyan() {
  return (
    <div className='elreyan-page-container'>
        <SubNav/>
        <div className="elreyan-content">
          <Outlet />
      </div>
    </div>
  )
}
