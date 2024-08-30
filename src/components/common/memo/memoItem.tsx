import Memo from "@/data/memo";
import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";


export default function MemoItem({memos}: {memos: Memo[]}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {
                memos.map(memo => (
                    <div>
                        <div className={`flex items-center cursor-pointer`}
                            onClick={onClick}>
                            <div className="mr-[4px]">
                                {
                                    isOpen? <FaChevronDown /> : <FaChevronRight />
                                }
                            </div>
                            <div>
                                {memo.title}
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