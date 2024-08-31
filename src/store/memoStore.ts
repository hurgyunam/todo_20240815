import Memo from "@/data/memo";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class MemoStore {
    memos: Memo[];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
        this.memos = [];
    }

    addMemo(parentMemo: Memo, title: string) {
        parentMemo.addChild(
            new Memo(
                uuidv4(),
                title,
                []
            )
        );
    }
}

export const memoStore = new MemoStore();