"use client"


import { observer } from "mobx-react";
import { FaPlus } from "react-icons/fa";
import Memo from "@/data/memo";
import MemoItem from "@/components/common/memo/memoItem";
import { getDoc, doc } from 'firebase/firestore'
import { db } from "@/config/firebase";
import { useState } from "react";
import { BoardListItem } from "@/data/board";
import BoardItem from "@/components/board/boardItem";
import { boardStore } from "@/store/boardStore";

async function getList() {
    const boards = doc(db, 'boards', 'root');
    const boardsSnapshot = await getDoc(boards);

    if(!boardsSnapshot.exists()) {

    }
}

export default observer(function BoardPage() {
    const { boards, addNewBoard } = boardStore;

    getList();

    return (
        <div className={`flex`}>
            <div className={`flex flex-col w-1/4 min-w-[200px] bg-white`}>
                {
                    boards.map((board) => {
                        return (
                            <BoardItem board={board} key={board.id} />
                        )
                    })
                }
                <div className={`flex justify-center `}>
                    <div className={`rounded-sm bg-bg-blue2 p-2 cursor-pointer`} onClick={addNewBoard}>
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className={`flex flex-col`}>

            </div>
        </div>
    )
})