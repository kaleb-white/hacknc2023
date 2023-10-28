export class Reply {
    msg: string;
    date: number;
    likes: number;
    user: string;

    constructor(msg: string, date: number, user: string, likes: number = 0) {
        this.msg = msg;
        this.date = date;
        this.likes = likes;
        this.user = user;
    }

}