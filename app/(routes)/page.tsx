import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d2b58382-a627-475e-a1c0-62ae18b14280");
  return (
    <div className="space-y-10 pb-10">
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  );
}
