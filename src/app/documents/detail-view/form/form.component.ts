import { DocumentsService } from './../../services/documents.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../../model/article';
import { Item } from '../../model/item';
import { Doc } from '../../model/doc';


@Component({
  selector: 'wo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() recivedArticles: Article[];
  @Input() recivedDoc: Doc;
  @Output() newItemIsAdded:EventEmitter<any> = new EventEmitter
  newItem = new Item;
  constructor(protected documentService: DocumentsService, protected service: DocumentsService) { }

  ngOnInit() {

  }

  addItem() {
    this.newItemIsAdded.emit(this.newItem);
  }


}
