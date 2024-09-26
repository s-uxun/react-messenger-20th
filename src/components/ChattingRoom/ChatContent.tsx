import { useParams } from "react-router-dom";
import useChatStore from "../../stores/ChatStore";
import useChatroomStore from "../../stores/ChatroomStore";
import useUserStore from "../../stores/UserStore";
import styled from "styled-components";

export function ChatContent() {
  const { roomId } = useParams<{ roomId: string }>();
  return <p>채팅</p>;
}
