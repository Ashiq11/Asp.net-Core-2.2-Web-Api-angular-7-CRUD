using Microsoft.EntityFrameworkCore;
using PaymentRegistrationSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentRegistrationSystem.EntityFrameworkCore
{
    public class PaymentDetailDbContext : DbContext
    {
        public PaymentDetailDbContext(DbContextOptions<PaymentDetailDbContext> options) 
            : base(options)
        {

        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
