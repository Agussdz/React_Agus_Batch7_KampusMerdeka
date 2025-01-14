import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: null,
      additionalDescription: "Doe",
    },
  ],
};

const useStore = create((set) => ({
  ...initialState,
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { id: uuidv4(), ...product }],
    })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));

export default useStore;
