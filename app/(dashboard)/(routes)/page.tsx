import { getSessions } from "@/data/sessions";

import { Heater, List, ShieldPlus } from "lucide-react";
import { columns } from "./sessions/_components/columns";

import { Widget } from "@/components/widget";
import { DataTableMin } from "@/components/ui/data-table-min";

import { GlucoseChart } from "./_components/glucose-chart";
import { TemperatureChart } from "./_components/temperature-chart";

export default async function HomePage() {
  const sessions = await getSessions();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <Widget
        title="Glucose"
        icon={ShieldPlus}
        className="col-span-1 md:col-span-2"
      >
        <GlucoseChart />
      </Widget>
      <Widget
        title="Temperature"
        icon={Heater}
        className="col-span-1 md:col-span-2"
      >
        <TemperatureChart />
      </Widget>
      <Widget
        className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4"
        title="Last sessions"
        icon={List}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <DataTableMin columns={columns} data={sessions} />
      </Widget>
    </div>
  );
}
