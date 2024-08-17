
import { FaCheck } from "react-icons/fa";
import { ITodo } from "./todo";

export default function Kanban() {
    const todos: ITodo[] = [
        {
            title: '네이버 아이디로 로그인',
            key: 'GC-10'
        },
        {
            title: '카카오 아이디로 로그인',
            key: 'GC-12'
        },
    ];

    return (
        <div className="flex flex-col w-[154px]">
            <div className="py-[16px] px-[8px] text-font-gray bg-bg-black rounded-[6px]">
                백로그 2
            </div>
            <div className="p-[4px] mt-[16px] text-font-gray bg-bg-black rounded-[6px]
                        grid grid-rows-1 gap-[6px]">
                {
                    todos.map(todo => (
                        <div className="p-[8px] flex flex-col bg-bg-lightgray rounded-[3px]"
                            key={todo.key}>
                            <div>
                                {todo.title}
                            </div>
                            <div className="flex items-center justify-between mt-[10px]">
                                <div className="flex items-center">
                                    <div className="bg-bg-skyblue p-[2px] rounded-[2px]">
                                        <FaCheck className="w-[10px] h-[10px]"/>
                                    </div>
                                    <div className="ml-[4px]">
                                        {todo.key}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}