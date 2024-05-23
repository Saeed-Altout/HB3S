"use client";

import { Sessions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

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
        {`${new Date().getFullYear()} - ${new Date().getMonth()} - ${new Date().getDay()} | ${
          new Date().getHours() - 12
        }:${new Date().getMinutes()}`}
      </p>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
