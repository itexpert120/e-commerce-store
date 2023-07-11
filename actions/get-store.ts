import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/`;

const getStore = async (): Promise<Store> => {
  const res = await fetch(`${URL}`, { next: { revalidate: 0 } });
  const body = res.json();
  return body;
};

export default getStore;
