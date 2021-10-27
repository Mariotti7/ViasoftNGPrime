import { Component } from '@angular/core';
import { NotaFiscalEletronica } from './model/model';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  viasoft = 'https://viasoft.com.br/'
  link = 'http://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx';
  front = 'https://github.com/Mariotti7/ViasoftNGPrime';
  back = 'https://github.com/Mariotti7/ViasoftNotaFiscal';
  titulo= `SISTEMA VIASOFT NOTA FISCAL ELETRÔNICA`;

  items = [
    {brand: 'Projeto Incompleto'},
    {brand: 'Integração em manutenção'},
    {brand: 'Web Scraping falhou'},
  ];

  buscarTodos!: NotaFiscalEletronica[]

    constructor( private service: ServiceService) {

    }
    ngOnit(){
      window.scroll(0,0)
    }

    findAll(){
      this.service.findAll().subscribe((resp: NotaFiscalEletronica[])=>{
        this.buscarTodos = resp

      })
    }
}
