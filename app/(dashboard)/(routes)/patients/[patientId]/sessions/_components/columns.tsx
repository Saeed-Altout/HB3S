"use client";

import { Sessions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";

export const columns: ColumnDef<Sessions>[] = [
  {
    accessorKey: "sequentialId",
    header: "ID",
  },
  {
    accessorKey: "createdAt",
    header: "Start Date",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
