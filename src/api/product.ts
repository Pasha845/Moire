import type { ISubjects, ICategories, IColors, IMaterials, ISeasons, IProduct } from "@/types/product";
import { useRoute } from "vue-router";

export const getSubjects = async (): Promise<ISubjects[]> => {
  try {
    const fetchResponse = await fetch('https://vue-moire.skillbox.cc/api/products');
    const subjects: ISubjects[] = await fetchResponse.json();

    return subjects;
  } catch(err) {
    throw new Error('Objects loading error');
  };
};

export const getCategories = async (): Promise<ICategories[]> => {
  try {
    const fetchResponse = await fetch('https://vue-moire.skillbox.cc/api/productCategories');
    const categories: ISubjects[] = await fetchResponse.json();

    return categories;
  } catch(err) {
    throw new Error('Categories loading error');
  };
};

export const getColors = async (): Promise<IColors[]> => {
  try {
    const fetchResponse = await fetch('https://vue-moire.skillbox.cc/api/colors');
    const colors: IColors[] = await fetchResponse.json();

    return colors;
  } catch(err) {
    throw new Error('Colors loading error');
  };
};

export const getMaterials = async (): Promise<IMaterials[]> => {
  try {
    const fetchResponse = await fetch('https://vue-moire.skillbox.cc/api/materials');
    const materials: IMaterials[] = await fetchResponse.json();

    return materials;
  } catch(err) {
    throw new Error('Materials loading error');
  };
};

export const getSeasons = async (): Promise<ISeasons[]> => {
  try {
    const fetchResponse = await fetch('https://vue-moire.skillbox.cc/api/seasons');
    const seasons: ISeasons[] = await fetchResponse.json();

    return seasons;
  } catch(err) {
    throw new Error('Seasons loading error');
  };
};

export const getProduct = async (): Promise<IProduct[]> => {
  try {
    const route = useRoute();
    const productId = route.params.id;
    const fetchResponse = await fetch(`https://vue-moire.skillbox.cc/api/products/${productId}`);
    const product: IProduct[] = await fetchResponse.json();

    return product;
  } catch(err) {
    throw new Error('Product loading error');
  };
};