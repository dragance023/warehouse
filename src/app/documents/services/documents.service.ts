import { ArticleList } from './../model/article-list';
import { DocList } from './../model/doc-list';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doc } from '../model/doc';
import { Article } from '../model/article';
import { ItemList } from '../model/item-list';
import { Item } from '../model/item';

const serverUrl = "http://localhost:3000/api/documents";
const articleUrl = "http://localhost:3000/api/articles";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {


  constructor(private http: HttpClient) { }

  getAll(params?) {
    let queryString = {};

    if(params) {
      queryString = {
        params: new HttpParams()
          .set("page", params.page || '1')
          .set("pageSize", params.pageSize || '10')
          .set("sort", params.sort || '')
          .set("sortDirection", params.sortDirection || '')
      };
    }

    return this.http.get(serverUrl, queryString).pipe(map(response => {
      return new DocList(response);
    }));
  }

  /* get zahtev za samo jedan dokument koji ce nam trebati u detail-view       */
  getDoc(id: number) {
    return this.http.get(serverUrl + "/" + Number(id)).pipe(map(response => {
      return new Doc(response);
    }));
  }

  /* put zahtev koji ce nam trebati da azurirani dokument postavimo na server  */
  updateDoc(doc: Doc, id: number) {
    return this.http.put(serverUrl + "/" + Number(id), doc).pipe(map(response => {
      return new Doc(response);
    }));
  }

  getArticles() {
    return this.http.get(articleUrl).pipe(map(response => {
      return new ArticleList(response);
    }));
  }


  getItems(id) {
    return this.http.get(serverUrl + "/" + id + "/items").pipe(map(response => {
      return new ItemList(response);
    }));
  }


  addItem(item) {
    return this.http.post(serverUrl + "/" + item.documents + "/items/", item).pipe(map(response => {
      return new Item(response);
    }));
  }

  // Nova stavka se čuva putem POST zahteva na http://localhost:3000/api/documents/:documentId/items;
}
