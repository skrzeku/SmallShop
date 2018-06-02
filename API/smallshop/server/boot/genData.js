
module.exports = function (app) {
  const data = [
    {
      name: 'iphone',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Macbook Air',
      category: 'laptops',
      color: 'white',
      condition: 'new',
      damaged: false,
      price: 2500,
      delivery_cost: 50,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Iphone 7',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Iphone 8',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: true,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Iphone 6',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Iphone X Plus',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Iphone X',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z'
    }


  ];

  var db = app.dataSources.db;
  const ShopModel = app.models.Shopitems || db.buildModelFromInstance('shopitems', data, {idInjection: true});

  data.map(function (shopitems) {
    ShopModel.create(shopitems, function (err, u) {
      if (err) {
        throw err;
      }
    });
  })
}
