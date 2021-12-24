import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  { field: "status", headerName: "Status", width: 70 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, status: "active" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: "active",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: "active",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, status: "active" },
  { id: 5, lastName: "Snow", firstName: "Jon", age: 35, status: "active" },
  {
    id: 6,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: "active",
  },
  {
    id: 7,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: "active",
  },
  { id: 8, lastName: "Stark", firstName: "Arya", age: 16, status: "active" },
  {
    id: 9,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    status: "active",
  },
  {
    id: 10,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    status: "active",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "active",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "active",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, status: "active" },
];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: "100%", backgroundColor: "#D7E6FE" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
