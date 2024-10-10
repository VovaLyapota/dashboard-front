export enum ProductCategoryEnum {
  MEDICINE = 'Medicine',
  HEART = 'Heart',
  HEAD = 'Head',
  HAND = 'Hand',
  LEG = 'Leg',
  DENTAL_CARE = 'Dental Care',
  SKIN_CARE = 'Skin Care',
}

export interface Product {
  id: number;
  photo: string | null;
  name: string;
  stock: number;
  price: number;
  suppliers: any[];
  category: ProductCategoryEnum;
}
