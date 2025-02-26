import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Navbar from '../components/Navbar';
import "../styles/Community.css"

const socket = io("http://localhost:5000")

function Community() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    // Fetch messages from backend (Discord cache)
    useEffect(() => {
        fetch("http://localhost:5000/api/discord/messages")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log("✅ Frontend received messages:", data);
            setMessages(data);
        })
        .catch((error) => console.error("❌ Error fetching messages:", error));

        // Listen for new messages via WebSocket
        socket.on("newMessage", (newMessage) => {
            setMessages((prevMessages) => [newMessage, ...prevMessages]);
        });


        return () => socket.off("newMessage");
    }, []);

    // Send a message from site → Discord
    const sendToDiscord = async () => {

        const user = JSON.parse(localStorage.getItem("discordUser"));

        const payload = {
            content: message,
            username: user ? user.username : "MeridijanTeam"
        };

        const response = await fetch("http://localhost:5000/api/discord/post", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            setMessage("");
        } else {
            console.error("❌ Failed to send message to Discord");
        }
    };

    return (
        <div className="community-container">
            <Navbar />
            <h1 className="community-title">Community Announcements</h1>

            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={`${msg.id}-${index}`} className="message">
                        <img 
                            src={msg.avatar
                                ? `https://cdn.discordapp.com/avatars/${msg.author_id}/${msg.avatar}.png`
                                : "https://via.placeholder.com/40" // Default avatar
                            }
                            alt="Avatar" 
                            className="avatar"
                        />
                        <div className="message-content">
                            <strong className="username">{msg.author}</strong>
                            <p className="text">{msg.content}</p>

                            {/* Attachments */}
                            {msg.attachments &&
                                msg.attachments.map((att, index) => (
                                    <a 
                                        key={index} 
                                        href={att} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="attachment"
                                    >
                                        [Attachment]
                                    </a>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="input-container">
                <textarea
                    className="message-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Post an update..."
                />
                <button className="send-button" onClick={sendToDiscord}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Community;
