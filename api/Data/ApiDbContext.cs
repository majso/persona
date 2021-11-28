using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class ApiDbContext : DbContext
    {
        public virtual DbSet<FeedData> Feeds {get;set;}

        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
            
        }
    }
}