import { useParams } from "react-router-dom";
import useChatroomStore from "../../stores/ChatroomStore";

export function useCurrentUserId() {
  const { roomId } = useParams<{ roomId: string }>();
  const currentUserId = useChatroomStore((state) =>
    state.chatrooms.find((room) => room.id === Number(roomId))
  )?.currentUserId;

  return currentUserId;
}
