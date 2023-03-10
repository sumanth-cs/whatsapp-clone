import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import default_profile_pic from "../assessts/user.png"
import SidebarChat from './SidebarChat'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"


const Sidebar = ({ userName }) => {
    const [group, setGroup] = useState([]);

    const getGroups = async () => {
        const getData = onSnapshot(collection(db, "groups"), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setGroup(list);
        });
    };

    useEffect(() => {
        getGroups();
    }, []);

    return (
        <div className="sidebar">
            {/* Header */}
            <div className="sidebarHeader">
                <div style={{ display: "flex" }}>
                    <img src={default_profile_pic} alt="profile pic" />
                    <h1>{userName}</h1>
                </div>
                <div className="sidebarHeaderRight">
                    <button style={{ border: "none", backgroundColor: "#f0f2f5" }}>
                        <span class="material-symbols-outlined">
                            interests
                        </span>
                    </button>
                    <button style={{ border: "none", backgroundColor: "#f0f2f5" }}>
                        <span className="material-symbols-outlined">
                            chat
                        </span>
                    </button>
                    <button style={{ border: "none", backgroundColor: "#f0f2f5" }}>
                        <span className="material-symbols-outlined">
                            more_vert
                        </span>
                    </button>
                </div>
            </div>
            {/* sidebar Search */}
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="Search contact" />
                </div>
            </div>
            {/* Sidebar chats*/}
            <div className="sidebarChats">
                <SidebarChat addNewChat />
                {group.map((group) => {
                    return <SidebarChat key={group.id} name={group.name} id={group.id} />;
                })}
            </div>
        </div>
    );
}

export default Sidebar