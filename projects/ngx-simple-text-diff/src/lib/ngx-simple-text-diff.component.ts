import {Component, Input, OnInit} from '@angular/core';

declare const Diff: {
  diffWordsWithSpace: (oldText: string, newText: string, options?: any) => any[];
};

@Component({
  selector: 'lib-ngx-simple-text-diff',
  template: `
    <span *ngFor="let part of diff" [ngClass]="{added: part.added, removed: part.removed}">{{part.value}}</span>
  `,
  styles: [`
    :host {
      display: block;
      text-align: left;
      white-space: pre-line;
    }

    .removed {
      color: red;
    }

    .added {
      color: green;
    }

  `]
})
export class NgxSimpleTextDiffComponent implements OnInit {


  @Input() oldText: string;
  @Input() newText: string;
  public diff: DiffPart[];

  constructor() {
  }

  ngOnInit(): void {
    this.diff = Diff.diffWordsWithSpace(
      this.oldText.replace(/\n/, '↵\n'),
      this.newText.replace(/\n/, '↵\n')
    );
  }

}

interface DiffPart {
  added: boolean;
  removed: boolean;
  value: string;
}
