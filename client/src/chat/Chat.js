import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendMessage } from "../actions/alert";
import io from "socket.io-client";
let socket = io.connect("http://localhost:5000");

const Chat = ({ sendMessage, chats }) => {
  useEffect(() => {

    socket.on("hohoho", function(data) {
      console.log("RECEIVED", data);
    });
    // return () => {
    //    socket.disconnect()
    //    console.log("disc")
    // }
  });

  return (
    <div>
      Chat
      
      <button onClick={() => sendMessage({conversation_id:"1xaa", from:"George", to:"Anna", text:"Hey babe"})} />
        {chats.map(chat => (
            <h1 key={chat.text}>{chat.to}</h1>
        ))}
    </div>
  );
};

Chat.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  chats: PropTypes.array.isRequired
};



const mapStateToProps = state => ({
    chats: state.alert
})

export default connect(
  mapStateToProps,
  { sendMessage }
)(Chat);
