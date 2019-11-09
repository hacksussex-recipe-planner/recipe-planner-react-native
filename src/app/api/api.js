const api = {};

api.getNutririonData = () => {
  const mockData = {
    days: [
      {
        macros: {
          calories: 2100,
          proteins: 35,
          carbohydrates: 450,
          fat: 30,
          fiber: 10,
        },
        recipes: [
          {
            name: 'Chicken with rice',
            date: '2019/02/13',
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
  };

  return mockData
}

export default api;