import { Paper, makeStyles, TextField, Button } from "@material-ui/core";
import { MeetingRoom } from "@material-ui/icons";

const buttonWidth = 150;
const useStyles = makeStyles((theme) => ({
  textBox: {
    width: `calc(50% - ${buttonWidth}px)`,
  },
  button: {
    width: buttonWidth,
    height: 56,
  },
}));

function GetRoom({ setRoom, room, handleJoin, userName, setUserName }) {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <TextField
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        value={userName}
        className={classes.textBox}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Room name"
        variant="outlined"
        value={room}
        className={classes.textBox}
        onChange={(e) => setRoom(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleJoin}
        endIcon={<MeetingRoom />}
      >
        Join
      </Button>
    </Paper>
  );
}

export default GetRoom;
