import { DocumentsService } from './../services/documents.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../model/doc';
import { Article } from '../model/article';
import { Item } from '../model/item';




@Component({
  selector: 'wo-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  articles: Article[];
  id: string;
  doc: Doc;
  itemList: Item[]; /* prosledjujem table componenti */
  constructor(protected active: ActivatedRoute, protected docService: DocumentsService) { }

  ngOnInit() {
    this.id = this.active.snapshot.params.id; /* preuzimamo id iz url-a                                                */
    this.getDocs();

    this.docService.getArticles().subscribe(res => this.articles = res.results);

    this.docService.getItems(this.id).subscribe(items => this.itemList = items.results);

  }

  addItem(newItem) {
    newItem.documents = this.id;
    this.docService.addItem(newItem).subscribe(res => {
      console.log("added new item" + JSON.stringify(res))
    })
    this.itemList.push(newItem);
  }


  getDocs() {
    this.docService.getDoc(Number(this.id)).subscribe(doc => {
      this.doc = doc;                         /* pozivamo funkciju getDoc koja nam vraca tacno dokument sa nasim id-om */  
    })                                        /* taj dokument cemo proslediti panel komponenti                         */
  }
}
