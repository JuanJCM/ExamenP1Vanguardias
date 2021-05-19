import { Component, OnInit } from '@angular/core';
import { Accounts } from '../shared/models/Accounts';
import { Transactions } from '../shared/models/Transactions';
import {AccountMocks} from '../shared/mocks/AccountMocks';
import { TransactionMock } from '../shared/mocks/TransactionMocks';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  items !: Transactions[];
  accounts!: Accounts[];
  cuenta !: string;
  constructor() { }

  ngOnInit(): void {
    this.accounts = AccountMocks;
    this.items= TransactionMock;
  }
  NombreCuenta(Accountid: number){
    var account = this.accounts?.find(p=> p.Id == Accountid);
    return account?.Name;
  }
  CurrencyState(Accountid: number){
    var account = this.accounts?.find(p=> p.Id == Accountid);
    return account?.Currency;
  }

}
