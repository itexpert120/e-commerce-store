import Link from "next/link";

import { Container } from "@/components/ui/container";
import { MainNav } from "@/components/main-nav";
import NarbarActions from "@/components/navbar-actions";

import getCategories from "@/actions/get-categories";
import getStore from "@/actions/get-store";
import { MobileNav } from "./mobile-nav";

export default async function Navbar() {
  const { name } = await getStore();
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{name.toUpperCase()}</p>
          </Link>
          <MainNav data={categories} />
          <MobileNav data={categories} />
          <NarbarActions />
        </div>
      </Container>
    </div>
  );
}
