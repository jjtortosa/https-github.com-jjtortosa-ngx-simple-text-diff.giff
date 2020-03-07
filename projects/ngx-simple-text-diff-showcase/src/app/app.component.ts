import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-simple-text-diff-showcase';
  textV1 = 'I am the very model of a modern Major-General,\n' +
    'I\'ve information vegetable, animal, and mineral,\n' +
    'I know the kings of England, and I quote the fights historical,\n' +
    'From Marathon to Waterloo, in order categorical.';
  textV2 = 'I am the very model of a cartoon individual,\n' +
    'My animation\'s comical, unusual, and whimsical,\n' +
    'I\'m quite adept at funny gags, comedic theory I have read,\n' +
    'From wicked puns and stupid jokes to anvils that drop on your head.';
}
