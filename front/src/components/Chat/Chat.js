import React,{useState} from 'react';
import "./Chat.scss"
import search from "../../images/search.svg"
import minin from "../../images/boyMessage.svg"
// import InputEmoji from 'react-input-emoji'
const Chat = () => {
    const [ message, setMessage ] = useState('')

    function handleOnEnter (text) {
        console.log('enter', text)
    }

    return (
        <div className="chatMain">

            <div className="receiversBox">
                <div className="inboxBox">
                    <h2>Inbox</h2>
                    <div className="notificationBox">
                        <p>
                            4 new
                        </p>
                    </div>
                </div>
                <div className="searchBox">
                    <input className="searchInpust" placeholder="Search"/>
                    <img src={search} alt="search" className="searchIcon"/>
                </div>
                <div className="receiversList" id="style-1">
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                    <div className="receiver">
                        <div className="checkBox">
                            <input type="checkbox"/>
                        </div>
                        <div className="receiverImageBox">
                            <img src={minin} alt="userAvatar"/>
                        </div>
                        <div className="receiverInfo">
                            <div className="receiverCredentials">
                                <div>
                                    <p>Vladidlen Minin</p>
                                </div>
                                <div>
                                    <p className="dateCredentials">Today 14:26 </p>
                                </div>
                            </div>
                            <div className="shortMessageBox">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad consectetur cum delectus
                                distinctio dolorum esse exercitationem iur...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dialogBox">
                <div className="receiverMessageInfo">
                    <div>
                        <img src={minin} alt="receiverAvatar"/>
                    </div>
                    <div className="receiverCredentialsDialog">
                        <h3>Vladilen Minin</h3>
                        <p>vladilen@mail.com</p>
                    </div>
                </div>
                <hr/>
                <div className="messagesBox" id="style-1">
                </div>
                <hr/>
                <div className="messageWriteBox">
                    {/*<InputEmoji*/}
                    {/*    value={message}*/}
                    {/*    onChange={setMessage()}*/}
                    {/*    cleanOnEnter*/}
                    {/*    onEnter={handleOnEnter}*/}
                    {/*    placeholder="Type a message"*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
};

export default Chat;