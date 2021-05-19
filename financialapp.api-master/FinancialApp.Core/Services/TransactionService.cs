using FinancialApp.Core.Entities;
using FinancialApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly IRepository<Transaction> _transactionRepository;
        public TransactionService(IRepository<Transaction> transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }
        public ServiceResult<Transaction> CreateTransactions(Transaction entity)
        {
            var transac = _transactionRepository.Get(entity.Id);
            if (transac == null)
                return ServiceResult<Transaction>.ErrorResult($"Transaccion duplicada {entity.Id}");
            return ServiceResult<Transaction>.SuccessResult(transac);
        }

        public ServiceResult<IReadOnlyList<Transaction>> GetTransactions()
        {
            var transac = _transactionRepository.Get();
            return ServiceResult<IReadOnlyList<Transaction>>.SuccessResult(transac);
        }
    }
}
