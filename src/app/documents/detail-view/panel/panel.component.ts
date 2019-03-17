import { DocumentsService } from './../../services/documents.service';
import { Component, OnInit, Input } from '@angular/core';
import { Doc } from '../../model/doc';
import { Router } from '@angular/router';

@Component({
  selector: 'wo-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() recivedDoc: Doc; /* primamo dokument koji nam je detail-view komponenta prosledila nakon sto je dobila odgovor sa servera*/
  constructor(protected documentService: DocumentsService, protected route: Router) { }    

  currentDate: Date = new Date();
  ngOnInit() {
  }

  recordDocument() { /* azuriranje */
    this.recivedDoc.status = "recorded"; /* menjamo status dokumenta*/
    this.recivedDoc.dateOfRecording = this.currentDate.toISOString();                       /* pravimo ISOString jer nam je na serveru polje     */
    /*                                                                                         za dateOfRecording tipa string, zatim saljemo put */                                                                              
    this.documentService.updateDoc(this.recivedDoc, this.recivedDoc._id).subscribe(res => { /* zahtev preko servisa i radi provere ispisujem     */
      console.log(res);                                                                      /*  odgovor sa servera */
    });
    this.route.navigate(['documents'])
  }                                                                                                     

}
