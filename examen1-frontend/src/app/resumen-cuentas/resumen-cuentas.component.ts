import { Component, OnInit } from '@angular/core';
import { TransactionMock } from '../shared/mocks/TransactionMocks';
import { Accounts } from '../shared/models/Accounts';
import { Transactions } from '../shared/models/Transactions';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.css']
})
export class ResumenCuentasComponent implements OnInit {
  income : number = 0;
  expenses: number = 0;
  total: number = 0;
  items !: Transactions[];
  accounts !: Accounts[];
  constructor() { }

  ngOnInit(): void {
    this.items = TransactionMock;
    this.Llenador();
  }

  Llenador() {
    this.items.forEach((item) => {
      if(item.Amount >0)
         this.income = this.income +(item.Amount * this.accounts?.findIndex(p => p.Id== item.AccountId));
      else
        this.expenses = this.expenses + (item.Amount * this.accounts?.findIndex(p => p.Id== item.AccountId));
    })
    this.total = this.income + this.expenses;
  }
}



