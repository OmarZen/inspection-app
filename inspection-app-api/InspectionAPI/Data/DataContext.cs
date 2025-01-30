using Microsoft.EntityFrameworkCore;

namespace InspectionAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Inspection> Inspections { get; set; }

        public DbSet<InspectionType> InspectionTypes { get; set; }

        public DbSet<Status> Statuses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InspectionType>().HasData(
                new InspectionType { Id = 1, InspectionName = "GIS Inspection" },
                new InspectionType { Id = 2, InspectionName = "Safety Inspection" }
            );

            modelBuilder.Entity<Status>().HasData(
                new Status { Id = 1, StatusOption = "Pending" },
                new Status { Id = 2, StatusOption = "Completed" },
                new Status { Id = 3, StatusOption = "Failed" }
            );

            modelBuilder.Entity<Inspection>().HasData(
                new Inspection
                {
                    Id = 1,
                    Status = "Completed",
                    Comments = "All points and places are in the right position.",
                    InspectionTypeId = 1
                },
                new Inspection
                {
                    Id = 2,
                    Status = "Pending",
                    Comments = "Inspection scheduled for next week.",
                    InspectionTypeId = 2
                }
            );
        }
    }
}
