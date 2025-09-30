import { calcTotalPizzaPrice } from '@/shared/lib/calc-total-pizza-price';
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';

export const GetPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[],
  items: ProductItem[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetails };
};
