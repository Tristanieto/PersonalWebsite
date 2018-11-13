export class Post {
    private _title: string;
    private _content: string;
    private _thumbnailName: string;
    private _thumbnailPath: string;

    constructor(title: string, content:string, thumbnailName: string) {
        this._title = title;
        this._content = content;
        this._thumbnailName = thumbnailName;
        this._thumbnailPath = "assets/PostImages/" +this._thumbnailName;
    }

    get title(): string {
        return this._title;
    }

    get content(): string{
        return this._content;
    }

    get thumbnailPath(): string {
        return this._thumbnailPath;
    }



}