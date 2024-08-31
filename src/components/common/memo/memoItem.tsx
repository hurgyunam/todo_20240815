import Memo from "@/data/memo";
import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


export default function MemoItem({memos}: {memos: Memo[]}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);


    return (
        <div>
            {
                memos.map(memo => (
                    <div key={memo.id}>
                        <div
                            className={`flex justify-between ${isHover? "bg-bg-skyblue": ""}`}
                            
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            >
                            <div className={`flex items-center cursor-pointer`}>
                                <div className="mr-[4px]" onClick={() => setIsOpen(!isOpen)}>
                                    {
                                        isOpen? <FaChevronDown /> : <FaChevronRight />
                                    }
                                </div>
                                <div>
                                    {memo.title}
                                </div>
                            </div>
                            <div className={`flex items-center cursor-pointer`}>
                                <div className="rounded-sm">
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                        {
                            isOpen && (
                                <div className={`flex flex-col ml-[14px]`}>
                                    <MemoItem memos={memo.children} />
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}