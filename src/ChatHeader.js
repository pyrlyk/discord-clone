import React from 'react';
import "./Chat.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import "./ChatHeader.css"
function ChatHeader({channelName}){
    return (
        <div className="chatHeader">
            <div className="charHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader_right">
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleIcon/>

                <div className="chatHeader_search">
                    <input placeholder="Search"/>
                    <SearchIcon/>
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    );
}

export default ChatHeader;