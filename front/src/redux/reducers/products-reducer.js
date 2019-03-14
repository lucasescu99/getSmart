export default (state = [], action) => {
  console.log('ACTIOON', action)
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    default: return state;
  }
};
