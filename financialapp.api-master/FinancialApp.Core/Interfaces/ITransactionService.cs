using FinancialApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Interfaces
{
    interface ITransactionService
    {
        ServiceResult<IReadOnlyList<Transaction>> GetTransactions();
        ServiceResult<Transaction> CreateTransactions(Transaction entity);

    }
}
