import { Avatar } from '@mui/material'

import React from 'react'

function SidebarRow({title, src, Icon}) {
  return (
    <div className='sideBarRow'>
    {src && <Avatar src={src} />}
    {Icon && <Icon />}
    <p>{title}</p>
    </div>
  )
}

export default SidebarRow