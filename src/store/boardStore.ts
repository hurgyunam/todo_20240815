import { BoardItem, BoardListItem } from "@/data/board";
import { makeAutoObservable } from "mobx";


class BoardStore {
    boards: BoardListItem[] = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    addNewBoard() {
        this.boards = [
            ...this.boards,
            new BoardListItem(null, null)
        ]
    }

    setBoardTitle(id: string, title: string) {
        this.boards = this.boards.map((board) => {
            if(board.id === id) {
                return new BoardListItem(
                    board.id,
                    title
                )
            } else {
                return board;
            }
        })
    }
}

export const boardStore = new BoardStore();