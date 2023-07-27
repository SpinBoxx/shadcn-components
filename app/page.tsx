import Heading from "@/components/heading";
import { PopoverFilter } from "@/components/filter-button";
import { Filter } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-1 p-8 lg:grid-cols-2">
      <div>
        <Heading
          title="Popover filter"
          description="A little component to filter one or many properties"
        />
        <div className="p-8">
          <PopoverFilter align="start">
            <Filter className="h-4 w-4" />
          </PopoverFilter>
        </div>
      </div>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </main>
  );
}
