import { useState } from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";

import GetRoom from "./GetRoom";
import Room from "./Room";
import { connect, listenMessage, sendMessage } from "./utils/socket-connection";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const App = () => {
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");
  const [isInRoom, setIsInRoom] = useState(false);
  const [messages, setMessages] = useState([]);

  const getMessage = (message) => {
    const { owner } = message;
    setMessages((prevMsgs) => [...prevMsgs, { ...message, fromMe: owner === userName }]);
  };

  const handleJoin = () => {
    connect({ userName, room });
    setIsInRoom(true);
    listenMessage(getMessage);
  };

  function pushMessage(message) {
    getMessage(message);
    sendMessage(message);
  }

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.root}>
        {isInRoom ? (
          <Room messages={messages} room={room} pushMessage={pushMessage} userName={userName} />
        ) : (
          <GetRoom
            room={room}
            setRoom={setRoom}
            handleJoin={handleJoin}
            userName={userName}
            setUserName={setUserName}
          />
        )}
      </Container>
    </>
  );
};

export default App;
