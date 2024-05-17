"use client";

import { Patients } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";

export const columns: ColumnDef<Patients>[] = [
  {
    accessorKey: "sequentialId",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
