import {Transactions} from "../models/Transactions";
export const TransactionMock: Array<Transactions> = 
[
    {Id: 1, AccountId: 1, Amount: 1000, Description: "Deposito", TransactionDate: new Date()},
    {Id: 2, AccountId: 2, Amount: -200, Description: "Pollos con tajadas", TransactionDate: new Date()},
    {Id: 3, AccountId: 2,Amount: 2000, Description: "Sorteo", TransactionDate: new Date()},
    {Id: 4,AccountId: 3, Amount: -500, Description: "Gasolina", TransactionDate: new Date()},
    {Id: 5,AccountId: 1, Amount: -200, Description: "Zapatos", TransactionDate: new Date()}

];