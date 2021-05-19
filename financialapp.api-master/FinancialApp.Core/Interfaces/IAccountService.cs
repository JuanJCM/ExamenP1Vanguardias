using FinancialApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Interfaces
{
    public interface IAccountService
    {
        ServiceResult<IReadOnlyList<Account>> GetAccounts();

    }
}
