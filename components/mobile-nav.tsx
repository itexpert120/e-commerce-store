"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Category } from "@/types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { IconButton } from "./ui/icon-button";
import { Menu } from "lucide-react";

interface MobileNavProps {
  data: Category[];
}

export function MobileNav({ data }: MobileNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="ml-auto sm:hidden">
      <Sheet>
        <SheetTrigger>
          <IconButton icon={<Menu />} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
            <SheetDescription>Shop different categories</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-y-4 mt-6">
            {routes.map((route) => (
              <SheetClose asChild key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
