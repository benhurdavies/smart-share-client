import { makeStyles, TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const buttonWidth = 150;
const useStyles = makeStyles((theme) => ({
  textBox: {
    width: `calc(100% - ${buttonWidth}px)`,
  },
  button: {
    width: buttonWidth,
    height: 56,
  },
}));

function CreateMessage({ content, setContent, sendMessage }) {
  const classes = useStyles();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="message"
        variant="outlined"
        value={content}
        className={classes.textBox}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={sendMessage}
        endIcon={<Send />}
      >
        Send
      </Button>
    </>
  );
}

export default CreateMessage;
