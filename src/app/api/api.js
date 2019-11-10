import axios from 'axios';

const api = {};

// Set config defaults when creating the instance
const requests = axios.create({
  // baseURL: 'http://www.mocky.io/v2/5dc745e93800001300cded08/'
  // baseURL: 'http://www.mocky.io/v2/5dc74a22380000f682cded0e'
  // baseURL: 'http://www.mocky.io/v2/5dc7698c3800001300cded28'
  // baseURL: 'http://www.mocky.io/v2/5dc785cb3000006000e1de2c'
  // baseURL: 'http://www.mocky.io/v2/5dc787943000004b00e1de2e'
  // baseURL: 'http://www.mocky.io/v2/5dc797c13000004b00e1de47'
  baseURL: 'https://292b637a.ngrok.io/'
});

const MOCK = false;

api.getNutririonData = payload => {

  console.log('Sending data to endpoint get_recipes')
  console.log(payload)

  if (!MOCK) {
    return requests.post('plan_meals', {
      headers: { 'content-type': 'application/json' },
      data: payload,
    })
  }

  const mockData = {
    data: {
      days: [
        {
          macros: {
            calories: 2100,
            proteins: 35,
            carbohydrates: 450,
            fat: 30,
            fiber: 10,
          },
          date: '2019/02/13',
          recipes: [
            {
              name: 'Chicken with rice',
              instructions: 'Firs, boil water for rice, then...',
              macros: {
                calories: 600,
                proteins: 20,
                carbohydrates: 150,
                fat: 12,
                fiber: 10
              },
              ingredients: {
                'chicken_breast': 200,
                'rice': 100
              },
            },
          ]
        },
      ]
    }
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 10)
  })

  return promise
}

api.getShoppingList = payload => {

  const mockData = {
    data: [
      ['Carrots (kg)', 0.5],
      ['Papas (kg)', 1],
      ['Chicken breasts (kg)', 1.5],
      ['Milk (lt)', 6],
      ['Yogurt (items)', 6],
      ['Bread (items)', 1],
      ['Lettuce (grams)', 300],
      ['Cod fillets (kg)', 1.2]
    ]
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 10)
  })

  return promise
}

export default api;