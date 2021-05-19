import { Component, OnInit } from '@angular/core';
import { Accounts } from '../shared/models/Accounts';
import { Transactions } from '../shared/models/Transactions';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  items !: Transactions;
  accounts!: Accounts[];
  cuenta !: string;
  constructor() { }

  ngOnInit(): void {
  }
  NombreCuenta(Accountid: number){
    var account = this.accounts?.find(p=> p.Id == Accountid);
    return account?.Name;
  }

}
