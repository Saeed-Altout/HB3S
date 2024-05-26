"use client";

import { Sessions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import { RowActions } from "./row-actions";

export const columns: ColumnDef<Sessions>[] = [
  {
    accessorKey: "sequentialId",
    header: "ID",
    cell: ({ row }) => (
      <div className="w-[100px]">
        {row.original.sequentialId < 10
          ? `I00${row.original.sequentialId}`
          : row.original.sequentialId >= 10 && row.original.sequentialId < 100
          ? `I0${row.original.sequentialId}`
          : `I${row.original.sequentialId}`}
      </div>
    ),
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "glucose",
    header: "Glucose",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <p className="text-nowrap">
        {format(new Date(row.original.createdAt), "hh:mm  /   dd - MMM")}
      </p>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
