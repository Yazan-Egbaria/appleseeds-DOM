const rows = document.querySelectorAll("#dataTable tr");
function toggleColumn(index) {
  rows.forEach((row) => {
    const cell = row.cells[index];
    cell.style.display = cell.style.display === "none" ? "" : "none";
  });
}

const resetTable = () => {
  rows.forEach((row) => {
    const cells = Array.from(row.cells);
    cells.forEach((cell) => {
      cell.style.display = "";
    });
  });
};
