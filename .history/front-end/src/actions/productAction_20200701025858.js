import axios from 'axios';

const listProducts = () => ( dispatch ) => {
      try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get("/api/products");
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

      }
      catch {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
}

const detailsProduct  = (produc) => ( dispatch ) => {
      try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get("/api/products");
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

      }
      catch {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
}