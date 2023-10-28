import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent {
  tweets = this.feedService.getNTweets(1); 

  constructor(
    private feedService: FeedService,
  ) {}

}
