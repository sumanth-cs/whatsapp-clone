import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import default_profile_pic from "../assessts/user.png"
import { onSnapshot, addDoc, collection, query, orderBy } from 'firebase/firestore'
import { db } from "../firebase"
import { Link } from 'react-router-dom';

const SidebarChat = ({ addNewChat, name, id }) => {
    const [msg, setMsg] = useState("");
    useEffect(() => {
        if (id) {
            const q = query(
                collection(db, "groups", id, "messages"),
                orderBy("timestamp", "asc")
            );
            const getMessage = onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    setMsg(doc.data());
                });
            });
        }
    }, [id]);
    //console.log(name, id);
    const createChat = async () => {
        const group = prompt("Please enter your group name");
        if (group) {
            try {
                const docRef = await addDoc(collection(db, "groups"), {
                    name: group,
                });

                //console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                // console.error("Error adding document: ", e);
            }
        }
    };
    return !addNewChat ? (
        <Link to={`group/${id}`}>
            <div className="sidebarChat">
                <img
                    src={default_profile_pic}
                    alt=""
                />
                <div className="sidebarChatInfo">
                    <h2>{name}</h2>
                    <p>{msg.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3>Add New Chat</h3>
        </div>
    );
}

export default SidebarChat