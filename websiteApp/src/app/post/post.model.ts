export class Post {
    private _title: string;
    private _content: string;
    private _thumbnailName: string;
    private _thumbnailPath: string;
    private _dateAdded: Date;

    constructor(title: string, content: string, thumbnailName: string) {
        this._title = title;
        this._content = content;

        if (thumbnailName == "") {
            this._thumbnailName = "default.png"
        } else {
            this._thumbnailName = thumbnailName;
        }
        this._thumbnailPath = "assets/PostImages/" + this._thumbnailName;
        this._dateAdded = new Date();
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get thumbnailPath(): string {
        return this._thumbnailPath;
    }

    get dateAdded(): Date{
        return this._dateAdded;
    }



}