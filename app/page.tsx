import Heading from "@/components/heading";
import { PopoverFilter } from "@/components/filter-button";
import { Filter } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-1 p-8 lg:grid-cols-2 lg:gap-4">
      <div className="rounded-lg border border-slate-600 p-4 dark:border-slate-800">
        <Heading
          title="Popover filter"
          description="A little component to filter one or many properties"
        />
        <div className="relative ">
          <PopoverFilter align="start">
            <Filter className="mr-2 h-4 w-4" /> Filter by
          </PopoverFilter>
        </div>
      </div>
      {/* <span>2</span>
      <span>3</span>
      <span>4</span> */}
    </main>
  );
}
