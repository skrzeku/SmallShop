
module.exports = function (app) {
  const data = [
    {
      name: 'Pawel',
      surname: 'Skrzeszewski',
      city: 'Bso',
      phone: '696976362',
      mail: 'pasudjsudhs@wp.pl',
      login: 'admin',
      password: 'admin'
    },
    {
      name: 'scssds',
      surname: 'dsdsds',
      city: 'dsdsd',
      phone: 'sdsdsds',
      mail: 'sdsdsds',
      login: 'admin1',
      password: 'admin1'
    }



  ];

  var db = app.dataSources.db;
  const ShopModel = app.models.Client || db.buildModelFromInstance('client', data, {idInjection: true});

  data.map(function (client) {
    ShopModel.create(client, function (err, u) {
      if (err) {
        throw err;
      }
    });
  })
}
