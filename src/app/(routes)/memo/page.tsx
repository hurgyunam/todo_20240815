"use client"

import { observer } from "mobx-react";
import { FaPlus } from "react-icons/fa";
import Memo from "@/data/memo";
import MemoItem from "@/components/memo/memoItem";
import { getDoc, doc } from 'firebase/firestore'
import { db } from "@/config/firebase";
import { useState } from "react";


async function getMemos() {
  const memos = doc(db, 'memos', 'root');
  const memosSnapshot = await getDoc(memos);

  if(!memosSnapshot.exists()) {
    return null;
  }

  console.log(memosSnapshot);

  return {
    
    ...memosSnapshot.data()
  };
}


export default function Home() {
    const [rootMemos, setRootMemos] = useState<Memo[]>([]);

    getMemos();
    
    return (
      <div className="bg-bg-gray h-screen">
        <div className="flex flex-col w-[300px] p-[24px]">
            <div className="flex items-center justify-between ">
                <div className="flex">
                    콘텐츠 
                </div>
                <div className="flex cursor-pointer">
                    <FaPlus />
                </div>
            </div>
            <div>
              <MemoItem memos={rootMemos} />
            </div>
        </div>
        <div>
        </div>
      </div>
    );
  }