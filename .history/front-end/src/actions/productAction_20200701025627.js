import axios from 'axios';

const listProducts = () => ( dispatch ) => {
      try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get("/api/products")
      }
}