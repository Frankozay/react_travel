import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
} from "./constants";
import { RecoomendProductAction } from "./recommendProductsActions";

interface RecommendProductsState {
  loading: boolean;
  error: string | null;
  productList: any;
}

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productList: [],
};

function reducer(state = defaultState, action: RecoomendProductAction) {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload.productList,
      };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default reducer;
