import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Item } from '../../model/item';
import { Article } from '../../model/article';

@Component({
  selector: 'wo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements DoCheck {

  @Input() itemList: Item[];
  @Input() articles: Article[];
  constructor() { }

  ngDoCheck() {
    this.addNames();
    // for(let i in this.itemList) {
    //   console.log(this.itemList[i].article);
    // }
  }

  addNames() {
    for(let i in this.itemList) {
      for(let y in this.articles) {
        if(this.itemList[i].article == this.articles[y].code) {
          this.itemList[i].article = this.articles[y].name
        }
      }
    }
  }
}
