using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinancialApp.API.Models
{
    public class TransactionDto
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
        public DateTime TransactionDate { get; set; }
    }
}
