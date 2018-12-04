import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ['./lista-cadastro.component.css']
})
export class ListaCadastroComponent implements OnInit {

  cadastros: Cadastro[];

  constructor(private service: CadastroService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.findAll()
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.cadastros = data;
        console.log('Response ==> ' + JSON.stringify(this.cadastros));
      }, (error: any) => {
        console.error(JSON.stringify(error));
      }, () => {
        console.log('COMPLETE EWS!');
      });
  }

}
