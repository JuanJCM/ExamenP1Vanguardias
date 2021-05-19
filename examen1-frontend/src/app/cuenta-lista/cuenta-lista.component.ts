import { Component, OnInit } from '@angular/core';
import { AccountMocks } from '../shared/mocks/AccountMocks';
import { Accounts } from '../shared/models/Accounts';

@Component({
  selector: 'app-cuenta-lista',
  templateUrl: './cuenta-lista.component.html',
  styleUrls: ['./cuenta-lista.component.css']
})
export class CuentaListaComponent implements OnInit {
  items !: Accounts[];
  constructor() { }

  ngOnInit(): void {
    this.items = AccountMocks;
  }

}
