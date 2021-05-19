import { Component, OnInit } from '@angular/core';
import { Accounts } from '../shared/models/Accounts';

@Component({
  selector: 'app-cuenta-lista',
  templateUrl: './cuenta-lista.component.html',
  styleUrls: ['./cuenta-lista.component.css']
})
export class CuentaListaComponent implements OnInit {
  items !: Accounts;
  constructor() { }

  ngOnInit(): void {
  }

}
