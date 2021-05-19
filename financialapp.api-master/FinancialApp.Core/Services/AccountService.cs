using FinancialApp.Core.Entities;
using FinancialApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Services
{
    class AccountService : IAccountService
    {
        private readonly IRepository<Account> _accountRepository;
        public AccountService(IRepository<Account> accountRepository)
        {
            _accountRepository = accountRepository;
        }
        public ServiceResult<IReadOnlyList<Account>> GetAccounts()
        {
            var accounts = _accountRepository.Get();
            return ServiceResult<IReadOnlyList<Account>>.SuccessResult(accounts);
        }
    }
}
