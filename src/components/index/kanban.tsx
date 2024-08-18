
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
        <div className="flex flex-col w-todo">
            <div className="py-normal px-small text-font-gray bg-bg-black rounded-normal">
                백로그 2
            </div>
            <div className="p-tiny mt-normal text-font-gray bg-bg-black rounded-normal
                        grid grid-rows-1 gap-[6px]">
                {
                    todos.map(todo => (
                        <div className="p-small flex flex-col bg-bg-lightgray rounded-small"
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