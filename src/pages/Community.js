import React, { useEffect, useState } from "react";

function Community() {
    
    const [message, setMessage ] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("/api/discord/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
    }, []);

    // Send Discord messages to announcments
    const sendToDiscord = async () => {
        const webhookURL = process.env.DISCORD_HOOK_URL;

        const payload = {
            content: message,
            username: "Meridijan team"
        }

        await fetch(webhookURL, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload),
        });

        //Clear input after sending
        setMessage("");
    };

  return (
    <div className="Community">
    <h1>Community Announcements</h1>
    <ul>
        {messages.map((msg) => (
            <li key={msg.id}>
                <strong>{msg.author.username}: </strong>{msg.content}
            </li>
        ))}
    </ul>
    <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Post an update..."
    />
    <button onClick={sendToDiscord}>Post to Discord</button>
    </div>
  );
}

export default Community;


