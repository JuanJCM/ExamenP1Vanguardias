using System;
using System.Collections.Generic;
using System.Text;

namespace FinancialApp.Core.Interfaces
{
    public interface IRepository<TEntity>
    {
        IReadOnlyList<TEntity> Get();
        TEntity Create(TEntity entity);
    }
}
