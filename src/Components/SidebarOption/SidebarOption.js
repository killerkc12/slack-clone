import React from 'react'
import { useHistory } from 'react-router-dom'
import './SidebarOption.css'
import db from '../../firebase.js'

const SidebarOption = ({Icon, title, id, addchannelOption}) => {

    const history = useHistory()

    const selectChannel = () => {
        if (id){
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }
    
    const addChanel = () => {
        const channelName = prompt("please Enter the Channel Name : ")
        if(channelName){
            db.collection('rooms').add({
                name : channelName
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addchannelOption ? addChanel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">
                        #{title}
                    </span>
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
