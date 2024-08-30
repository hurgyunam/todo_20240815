"use client"

import { observer } from "mobx-react";
import { FaPlus } from "react-icons/fa";
import Memo from "@/data/memo";
import MemoItem from "@/components/common/memo/memoItem";

export default observer(function Home() {
    const rootMemos: Memo[] = [
      new Memo(
        '1234',
        'TEST',
        [
          new Memo(
            '13123',
            'TEST2',
            [
              new Memo(
                '13123',
                'TEST3',
                [
                  
                ]
              )
            ]
          )
        ]
      )
    ];

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
  })