
export default class Memo {
    private id: String;
    readonly title: String;
    readonly children: Memo[];

    constructor(id: String, title: String, children: Memo[] | undefined = undefined) {
        this.id = id;
        this.title = title;
        this.children = children ?? [];
    }
}