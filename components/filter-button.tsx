"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode, useEffect, useState } from "react";
import { FacetedFilter } from "./FacetedFilter";
import { statuses, tags } from "@/data/status";
import { Label } from "./ui/label";

interface Props {
  children: ReactNode;
  align: "start" | "center" | "end";
}

export function PopoverFilter({ children, align }: Props) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [filteredStatuses, setFilteredStatuses] = useState([...statuses]);
  const [selectedValuesTags, setSelectedValuesTags] = useState<string[]>([]);
  const [filteredTags, setFilteredTags] = useState([...tags]);

  useEffect(() => {
    if (selectedValues.length === 0) {
      setFilteredStatuses([...statuses]);
    } else {
      // Sinon, filtrer le JSON en fonction des valeurs sélectionnées dans selectedValues
      const filteredData = statuses.filter((status) =>
        selectedValues.includes(status.value)
      );
      setFilteredStatuses(filteredData);
    }
  }, [selectedValues]);

  useEffect(() => {
    if (selectedValuesTags.length === 0) {
      setFilteredTags([...tags]);
    } else {
      // Sinon, filtrer le JSON en fonction des valeurs sélectionnées dans selectedValuesTags
      const filteredData = tags.filter((tag) =>
        selectedValuesTags.includes(tag.value)
      );
      setFilteredTags(filteredData);
    }
  }, [selectedValuesTags]);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">{children}</Button>
        </PopoverTrigger>
        <PopoverContent align={align} className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Filtrer par</h4>
              <p className="text-sm text-muted-foreground">
                Choisir les differents filtres pour filtrer les idées
              </p>
            </div>
            <div className="grid gap-2">
              <FacetedFilter
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
                options={statuses}
                title="Status"
              />
              <FacetedFilter
                selectedValues={selectedValuesTags}
                setSelectedValues={setSelectedValuesTags}
                options={tags}
                title="Tags"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex justify-between">
        <div className="mt-10">
          <Label>Voici nos differents status</Label>
          <ul>
            {filteredStatuses.map((status) => (
              <li key={status.value}>{status.label}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <Label>Voici nos differents tags</Label>
          <ul>
            {filteredTags.map((tag) => (
              <li key={tag.value}>{tag.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
