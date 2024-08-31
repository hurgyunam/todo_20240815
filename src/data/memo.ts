
export default class Memo {
    readonly id: string;
    readonly title: String;
    readonly children: Memo[];

    constructor(id: string, title: String, children: Memo[] | undefined = undefined) {
        this.id = id;
        this.title = title;
        this.children = children ?? [];
    }
}