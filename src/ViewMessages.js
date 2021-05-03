import ViewMessage from "./ViewMessage";

function ViewMessages({ messages }) {
  return messages.map((message, i) => <ViewMessage key={i} message={message} />);
}

export default ViewMessages;
