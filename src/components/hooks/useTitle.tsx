import useUserStore from "../../stores/UserStore";

//채팅방 title이 없을 경우엔 그룹채팅(3명 이상), 혹은 상대방 이름 할당. 만약 없을 경우엔 '알 수 없음' 할당.
export function useTitle() {
  const users = useUserStore((state) => state.users);

  const getTitle = (
    title: string,
    userIds: number[],
    currentUserId: number
  ) => {
    if (title) return title;

    if (userIds.length === 2) {
      const otherUserId = userIds.find((id) => id !== currentUserId);
      const otherUser = users.find((user) => user.id === otherUserId);
      return otherUser?.name || "(알 수 없음)";
    }
    return "그룹채팅";
  };

  return { getTitle };
}
