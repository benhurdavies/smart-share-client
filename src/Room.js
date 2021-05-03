import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
} from "@material-ui/core";

import ViewMessages from "./ViewMessages";
import CreateMessage from "./CreateMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100%)",
  },
  footer: {
    verticalAlign: "bottom",
  },
  content: {
    height: "calc(100% - 150px)",
    position: "relative",
  },
  keepBottom: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

function Room({ userName, room, messages, pushMessage }) {
  const classes = useStyles();
  const [content, setContent] = useState("");

  function sendMessage() {
    const message = {
      id: uuidv4(),
      body: content,
      owner: userName,
    };
    pushMessage(message);
    setContent("");
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={`Room: ${room}`} />
      <CardContent className={classes.content}>
        <div className={classes.keepBottom}>
          <ViewMessages messages={messages} />
        </div>
      </CardContent>
      <CardActions className={classes.footer}>
        <CreateMessage content={content} setContent={setContent} sendMessage={sendMessage} />
      </CardActions>
    </Card>
  );
}

export default Room;
