
import { v4 as uuidv4 } from "uuid";

export class BoardListItem {
    readonly id: string;
    readonly title: string;
    readonly isCompleted: boolean;

    constructor(id: string | null, title: string | null) {
        this.id = id ?? uuidv4();
        this.title = title ?? "";
        this.isCompleted = id !== null;
    }
}

export class BoardDetail {
    readonly id: string;
    content: string;

    constructor(id: string, content: string) {
        this.id = id;
        this.content = content;
    }
}

export class BoardItem {
    readonly id: string;
    readonly title: string;
    readonly content: string;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

}