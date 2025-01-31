﻿// <auto-generated />
using InspectionAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace InspectionAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20250131192356_AddCoordinatesToInspection")]
    partial class AddCoordinatesToInspection
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("InspectionAPI.Inspection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Comments")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<int>("InspectionTypeId")
                        .HasColumnType("int");

                    b.Property<double>("Latitude")
                        .HasColumnType("float");

                    b.Property<double>("Longitude")
                        .HasColumnType("float");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.HasIndex("InspectionTypeId");

                    b.ToTable("Inspections");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Comments = "All points and places are in the right position.",
                            InspectionTypeId = 1,
                            Latitude = 0.0,
                            Longitude = 0.0,
                            Status = "Completed"
                        },
                        new
                        {
                            Id = 2,
                            Comments = "Inspection scheduled for next week.",
                            InspectionTypeId = 2,
                            Latitude = 0.0,
                            Longitude = 0.0,
                            Status = "Pending"
                        });
                });

            modelBuilder.Entity("InspectionAPI.InspectionType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("InspectionName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("InspectionTypes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            InspectionName = "GIS Inspection"
                        },
                        new
                        {
                            Id = 2,
                            InspectionName = "Safety Inspection"
                        });
                });

            modelBuilder.Entity("InspectionAPI.Status", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("StatusOption")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Statuses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            StatusOption = "Pending"
                        },
                        new
                        {
                            Id = 2,
                            StatusOption = "Completed"
                        },
                        new
                        {
                            Id = 3,
                            StatusOption = "Failed"
                        });
                });

            modelBuilder.Entity("InspectionAPI.Inspection", b =>
                {
                    b.HasOne("InspectionAPI.InspectionType", "InspectionType")
                        .WithMany()
                        .HasForeignKey("InspectionTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("InspectionType");
                });
#pragma warning restore 612, 618
        }
    }
}
