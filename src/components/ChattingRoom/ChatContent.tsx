import useChatStore from "../../stores/ChatStore";

export function ChatContent() {
  const chatrooms = useChatStore((state) => state.chatrooms);

  return <p>채팅방</p>;
}
