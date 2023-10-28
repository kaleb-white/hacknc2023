import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  constructor() { }

  getNTweets(n: number): Tweet[] {
    return [new Tweet("abcde", 1, "john")]
  }
}
