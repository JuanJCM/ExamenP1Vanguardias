using System;
using System.Collections.Generic;
using System.Text;
using FinancialApp.Core.Interfaces;
using FinancialApp.Data;

namespace FinancialApp.Infrastructure.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity>
    {
        private readonly FinancialAppContext _context;

        protected BaseRepository(FinancialAppContext context)
        {
            _context = context;
        }
        public TEntity Create(TEntity entity)
        {
            _context.AddAsync(entity);
            _context.SaveChangesAsync();
            return entity;
        }

        public IReadOnlyList<TEntity> Get()
        {
            
        }
    }
}
