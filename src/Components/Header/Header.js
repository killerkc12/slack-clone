import React from 'react'
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../ReactContextApi/StateProvider';

const Header = () => {

    const [{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">

                {/* Avtars for logged in user  */}
                <Avatar 
                    className="header__avtar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />

                {/* Time icon */}
                <AccessTimeIcon/>
            </div>
            <div className="header__search">

                {/* Search icon  */}
                <SearchIcon/>

                {/* input  */}
                <input placeholder="Search Slack"/>

            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
