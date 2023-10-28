import { Tweet } from './tweet';
import { Reply } from './reply';

export class TweetDetails extends Tweet {
    replies: Reply[];

    constructor(msg: string, date: number, user: string, likes: number = 0, replies: Reply[] = []) {
        super(msg, date, user, likes)
        this.replies = replies;
    }
}