
import { BoardListItem } from "@/data/board";
import { boardStore } from "@/store/boardStore";
import { ChangeEvent, useState } from "react";

export default function BoardItem({board} : {board: BoardListItem}) {
    const [title, setTitle] = useState<string>("");
    const [updatable, setUpdatable] = useState<boolean>(false);

    const updateBoardTitle = () => {
        const { setBoardTitle } = boardStore;

        setBoardTitle(board.id, title);
    }

    const setBoardTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    return (
        <div key={board.id}>
            {
                !board.isCompleted? 
                (
                    <div className={`flex justify-between`}>
                        <input className={`text-bg-black`} onChange={setBoardTitle} />
                        <div className={`rounded-sm bg-bg-blue2 p-2 min-w-[45px]`} 
                            onClick={updateBoardTitle}>
                            완료
                        </div>
                    </div>
                ) :
                (
                    <div>{board.title}</div>
                )
            }
        </div>
    )
}