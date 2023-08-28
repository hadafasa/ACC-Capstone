const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch products', error);
        return [];
    }
};

// Add more API fetches here? fetch single product, fetch product categories

export const fetchProductById = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch product with id ${id}:`, error);
      return null;
    }
};
