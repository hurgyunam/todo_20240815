import MainHeader from "@/components/common/mainHeader";
import Kanban from "@/components/index/kanban";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-bg-gray h-screen">
      <MainHeader />
      <div className="p-[24px]">
        <Kanban />
      </div>
    </div>
  );
}
