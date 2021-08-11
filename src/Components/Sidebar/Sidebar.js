import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from '../SidebarOption/SidebarOption';
import db from '../../firebase'
import { useStateValue } from '../ReactContextApi/StateProvider';
const Sidebar = () => {

    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue()

    useEffect(()=>{
       db.collection('rooms').onSnapshot(snapshot => {
           setChannels(
               snapshot.docs.map(doc => ({
                   id: doc.id,
                   name: doc.data().name
               }))
           )
       })
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Killer Org</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption  title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <SidebarOption Icon={CreateIcon} title="this is title"/>
            <hr></hr>
            <SidebarOption Icon={CreateIcon} title="Channels"/>
            <hr></hr>
            <SidebarOption Icon={CreateIcon} title="Add Chaneel" addchannelOption/>

            {/* Connect to DB and list all the channels */}
            {/* <SdidebaOtion ..>/</SdidebaOtion ..> */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
