# NgxSimpleTextDiff

Angular 2+ implementation of the diff library for displaying diffs of text.
[https://www.npmjs.com/package/diff](https://www.npmjs.com/package/diff)

# Quickstart

1. Install `ngx-simple-text-diff` from npm
```
npm i ngx-simple-text-diff
``` 

2. Import `NgxDiffModule` to your app:
    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { NgxSimpleTextDiffModule } from 'ngx-simple-text-diff';
    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NgxSimpleTextDiffModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
3. Use the `lib-ngx-simple-text-diff` component by setting the `oldText` and `newText` attributes:
    ```
    <lib-ngx-simple-text-diff [oldText]="oldDocumentContents" [newText]="newDocumentContents"></lib-ngx-simple-text-diff>
    ```
   


