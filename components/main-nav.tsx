"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const MainNav = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const ROUTES = [
    {
      href: `#`,
      label: "Components by mimo",
    },
  ];
  return (
    <nav className={cn("flex items-center gap-x-4 lg:space-x-4", className)}>
      {ROUTES.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
