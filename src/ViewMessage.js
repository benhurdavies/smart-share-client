import { Chip, Avatar, makeStyles } from "@material-ui/core";
import Linkify from "react-linkify";

const useStyles = makeStyles((theme) => ({
  showLeft: {
    textAlign: "left",
  },
  showRight: {
    textAlign: "right",
  },
  row: {
    width: "100%",
    padding: 5,
  },
}));

function ViewMessage({ message }) {
  const { body, owner, fromMe } = message;
  const classes = useStyles();
  return (
    <div className={`${classes.row} ${fromMe ? classes.showRight : classes.showLeft}`}>
      <Chip
        color={`${fromMe ? "primary" : "secondary"}`}
        avatar={<Avatar>{owner.charAt(0)}</Avatar>}
        label={beautifyContent(body)}
      ></Chip>
    </div>
  );
}

function beautifyContent(str) {
  return <Linkify>{str}</Linkify>;
}

export default ViewMessage;
