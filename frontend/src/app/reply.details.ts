import { Tweet } from './tweet';
import { Reply } from './reply';

export class TweetDetails extends Tweet {
    tweet?: Tweet;

    constructor(msg: string, date: number, user: string, likes: number = 0, tweet?: Tweet) {
        super(msg, date, user, likes)
        this.tweet = tweet;
    }
}