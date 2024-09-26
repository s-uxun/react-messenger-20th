import { useMobile } from "../hooks/useMobile";
import { BottomBar } from "../../assets/icons";

export function ChatBottom() {
  const isMobile = useMobile();
  if (isMobile) {
    return null;
  }
  return <BottomBar style={{ backgroundColor: "white" }} />;
}
