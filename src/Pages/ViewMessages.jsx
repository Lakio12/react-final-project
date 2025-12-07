import React from "react";
import { Link } from "react-router-dom";
import "../Styles/View_Messages.css";

// Hardcoded messages
// With backend, users can send messages from the customer side through Contact
const MOCK_MESSAGES = [
  {
    customerName: "John Doe",
    customerEmail: "john@example.com",
    sentDate: "2024-11-20 10:15:00",
    messageText: "Hello, I am interested in your electronics products.",
  },
  {
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    sentDate: "2024-11-18 14:32:00",
    messageText: "Do you offer bulk discounts on groceries?",
  },
];

function ViewMessages() {
  const messages = MOCK_MESSAGES;

  return (
    <div className="messages-page">
      <div className="messages-container">
        <h2>Messages for Your Company</h2>

        <div className="messages-list">
          {messages.length === 0 ? (
            <p>No messages found for your company.</p>
          ) : (
            messages.map((msg, index) => (
              <div className="message-card" key={index}>
                <p>
                  <strong>From:</strong> {msg.customerName} (
                  <a href={`mailto:${msg.customerEmail}`}>
                    {msg.customerEmail}
                  </a>
                  )
                </p>
                <p>
                  <strong>Date:</strong> {msg.sentDate}
                </p>
                <p className="message-text">
                  <strong>Message:</strong>{" "}
                  <span>{msg.messageText}</span>
                </p>
              </div>
            ))
          )}
        </div>

        <Link to="/company-dashboard">
          <button type="button">Return to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default ViewMessages;
