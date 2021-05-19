import { Component, OnInit } from '@angular/core';
import { AccountMocks } from '../shared/mocks/AccountMocks';
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
  ratio : number = 0;
  constructor() { }

  ngOnInit(): void {
    this.items = TransactionMock;
    this.accounts = AccountMocks;
    this.Llenador();
  }

  Llenador() {
    this.items.forEach((item) => {
      var proratio = this.accounts?.find(p => p.Id== item.AccountId);
      this.ratio != proratio?.ConversionRate;
      if(item.Amount >0)
         this.income = this.income +(item.Amount * this.ratio );
      else
        this.expenses = this.expenses + (item.Amount * this.ratio);
    })
    this.total = this.income + this.expenses;
  }
}



