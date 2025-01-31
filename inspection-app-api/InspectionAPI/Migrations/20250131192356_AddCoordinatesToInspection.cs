using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InspectionAPI.Migrations
{
    public partial class AddCoordinatesToInspection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Inspections",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Inspections",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Inspections");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Inspections");
        }
    }
}
