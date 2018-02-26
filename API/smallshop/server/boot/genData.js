
module.exports = function (app) {
  const data = [
    {
      name: 'iphone',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: false,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Macbook Air',
      category: 'laptops',
      color: 'white',
      condition: 'new',
      damaged: false,
      price: 2500,
      delivery_cost: 50
    },
    {
      name: 'Iphone 7',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Iphone 8',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: true,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Iphone 6',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Iphone X Plus',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Iphone X',
      category: 'smartphones',
      color: 'gold',
      condition: 'used',
      damaged: false,
      price: 1999,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
    },
    {
      name: 'Samsung S8',
      category: 'smartphones',
      color: 'silver',
      condition: 'used',
      damaged: true,
      price: 567,
      delivery_cost: 35
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
