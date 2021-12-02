import { ActionTypes } from '../constants/action-types';
export const setProducts = (products) = {
  return {
    type: SET_PRODUCTS
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}