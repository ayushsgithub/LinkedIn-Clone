import { Avatar } from '@mui/material'
import React , { forwardRef } from 'react'
import InputOptions from './InputOptions'
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post-header">
            {photoUrl ? <Avatar src={photoUrl}>{name[0]}</Avatar> : <Avatar></Avatar>}
            <div className="post-info">
                {name ? <h2>{name}</h2> : <h2>{description}</h2>}
                {description && <p>{description}</p>}
            </div>
        </div>

        <div className="post-body">
            {message && <p>{message}</p>}
        </div>
        <div className="post-buttons">
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
})

export default Post