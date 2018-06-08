
module.exports = function (app) {
  const data = [
    {
      name: 'iphone 6',
      category: 'smartphones',
      color: 'gold',
      condition: 'new',
      damaged: false,
      price: 1999,
      delivery_cost: 35,
      start_date: '2018-06-01T17:16:39.259Z',
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphone6.jpeg',
      description: 'iphone6sssgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/MacbookAir.jpeg',
      description: 'iphone6sssgsscsdss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphone7.jpeg',
      description: 'iphone6sssdsdsdsdgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphone8.jpeg',
      description: 'iphone6sssgssdsdsdsdwwewe'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphone6.jpeg',
      description: 'iphonsdse6sssgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6sssgssdsds'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6sssgssdsdsds'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6ssssddssamsunggss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6ssdssdsgfgfsgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6ssdsdssgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6ssssdsdsgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6sssgsdsdsdss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6sdsdsssgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphodssdsne6sssgss'
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
      finish_date: '2018-07-01T17:16:39.260Z',
      path_image: '../../../assets/images/iphoneX.jpeg',
      description: 'iphone6sssgsssdsds'
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
