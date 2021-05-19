using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Infrastructure.Repositories
{
    public interface IRepository<TEntity>
    {
        TEntity Filter();
        TEntity Find();
    }
}
