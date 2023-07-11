import { create } from "zustand";

import { Product } from "@/types";

// create a store modal for zustand
// isOpen to check if the modal is open
// data to fetch information about product
// onOpen function that takes data and sets data to data
// onCLose function which closes the modal
interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

// create the hook using create<T> and pass an arrow function
// that takes a setter and define default values and method functions
const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
