import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  constructor() { }

  getNTweets(n: number): Tweet[] {
    let a = new Tweet("abcde", 1, "john")
    let b = new Tweet("abcde", 1, "john")
    let z = [a, b]
    return z 
  }
}
