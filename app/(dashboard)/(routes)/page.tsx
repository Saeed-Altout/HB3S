import { FaTemperatureHigh } from "react-icons/fa";
import {
  Circle,
  CirclePlus,
  Heart,
  List,
  Play,
  StopCircle,
  UserPlus,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <div className="flex justify-start items-center gap-5 flex-wrap">
          <Button>
            <Play className="h-5 w-5 mr-2" /> Start session
          </Button>
          <Button variant="destructive">
            <StopCircle className="h-5 w-5 mr-2" /> Stop session
          </Button>
          <Button variant="outline">
            <Play className="h-5 w-5 mr-2" /> Auto Start | Stop
          </Button>
        </div>
      </div>
      <div className="border rounded-md p-5 space-y-4">
        <h1 className="text-xl font-semibold tracking-wide">
          <Button size="icon" variant="ghost">
            <UserPlus className="h-5 w-5" />
          </Button>{" "}
          Health
        </h1>

        <div className="w-full flex justify-center items-center relative">
          <Circle className="h-40 w-40 text-green-400" />
        </div>

        <p className="w-full text-center text-3xl font-semibold text-green-400">
          100/100
        </p>
      </div>
      <div className="border rounded-md p-5 space-y-4">
        <h1 className="text-xl font-semibold tracking-wide">
          <Button size="icon" variant="ghost">
            <CirclePlus className="h-5 w-5" />
          </Button>
          Glucose
        </h1>

        <div className="w-full flex justify-center items-center relative">
          <Circle className="h-40 w-40 text-blue-400" />
        </div>

        <p className="w-full text-center text-3xl font-semibold text-blue-400">
          100/100
        </p>
      </div>
      <div className="border rounded-md p-5 space-y-4">
        <h1 className="text-xl font-semibold tracking-wide">
          <Button size="icon" variant="ghost">
            <Heart className="h-5 w-5" />
          </Button>
          Heart Bp
        </h1>
        <div className="w-full flex justify-center items-center relative">
          <Circle className="h-40 w-40 text-red-400" />
        </div>

        <p className="w-full text-center text-3xl font-semibold text-red-400">
          100/100
        </p>
      </div>
      <div className="border rounded-md p-5 space-y-4">
        <h1 className="text-xl font-semibold tracking-wide">
          <Button size="icon" variant="ghost">
            <FaTemperatureHigh className="h-5 w-5" />
          </Button>
          Temperature
        </h1>
        <div className="w-full flex justify-center items-center relative">
          <Circle className="h-40 w-40 text-orange-400" />
        </div>

        <p className="w-full text-center text-3xl font-semibold text-orange-400">
          100/100
        </p>
      </div>
      <div className="border rounded-md p-5 space-y-4 col-span-1 md:col-span-2 lg:col-span-3">
        <h1 className="text-xl font-semibold tracking-wide">
          <Button size="icon" variant="ghost">
            <List className="h-5 w-5" />
          </Button>{" "}
          Last sessions
        </h1>
        <Table className="overflow-x-hidden">
          <TableCaption>A list of your recent sessions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Glucose</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-nowrap">Ahmad Ali</TableCell>
              <TableCell className="text-nowrap">2</TableCell>
              <TableCell className="text-nowrap">80 mg/db</TableCell>
              <TableCell className="text-nowrap">
                2024-6-20 | 10:00 AM
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell className="text-nowrap">Ahmad Ali</TableCell>
              <TableCell className="text-nowrap">2</TableCell>
              <TableCell className="text-nowrap">120 mg/db</TableCell>
              <TableCell className="text-nowrap">
                2024-6-20 | 02:00 PM
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell className="text-nowrap">Ahmad Ali</TableCell>
              <TableCell className="text-nowrap">2</TableCell>
              <TableCell className="text-nowrap">70 mg/db</TableCell>
              <TableCell className="text-nowrap">
                2024-6-20 | 10:00 PM
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV004</TableCell>
              <TableCell className="text-nowrap">Ahmad Ali</TableCell>
              <TableCell className="text-nowrap">2</TableCell>
              <TableCell className="text-nowrap">87 mg/db</TableCell>
              <TableCell className="text-nowrap">
                2024-6-20 | 12:00 PM
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
