import { io } from "socket.io-client";

const { REACT_APP_SERVER_URL } = process.env;

let socket;

function connect({ userName, room }) {
  socket = io(REACT_APP_SERVER_URL, {
    autoConnect: false,
    query: { userName, room },
  });
  socket.connect();

  socket.on("connect", (socket) => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("disconnect to server");
  });
}

function sendMessage(message) {
  socket.emit("message", message);
}

const listenMessage = (callback) => {
  socket.on("message", callback);
};

function disconnect() {
  socket.disconnect();
}

export { connect, disconnect, sendMessage, listenMessage, socket };
