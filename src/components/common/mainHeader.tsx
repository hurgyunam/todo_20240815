import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

export default function MainHeader() {
    return (
        <div className="flex flex-col ">
            <div className="flex justify-between px-[12px] 
                    text-[14px] h-[56px] border-border-gray 
                    border-b-[1px]">
                <div className="flex items-center">
                    <CgMenuGridR className="w-[36px] h-[32px]" color="#9FADBC"/>
                    <div className="w-icon h-icon bg-bg-skyblue 
                            flex items-center justify-center
                            cursor-pointer rounded-[3px]">
                        <div className="text-bg-black text-[24px]">+</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[8px] items-center">
                    <HiOutlineSearch className="w-icon h-icon" color="#9FADBC" />
                    <IoIosNotifications className="w-icon h-icon" color="#9FADBC" />
                    <BsFillQuestionCircleFill className="w-icon h-icon" color="#9FADBC" />
                    <IoIosSettings className="w-icon h-icon" color="#9FADBC" />
                </div>
            </div>
        </div>
    )
}