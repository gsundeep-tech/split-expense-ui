const baseURL = 'https://split-expenses-api.herokuapp.com/api/'; // process.env.SPLIT_EXPENSES_API || 'http://localhost:5000/api/';

const config = {
  baseUsersURL: baseURL + 'user',
  baseProductsURL: baseURL + 'product',
};

export default config;
