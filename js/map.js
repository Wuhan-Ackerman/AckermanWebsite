(function () {
  var coordinates = [114.3, 30.6];
  var address = "武汉市江岸区四唯街道京汉大道1268号铂仕汇国际广场16楼";

  var map = new AMap.Map("map", {
    zoom: 16,
    center: coordinates,
  });

  new AMap.Marker({
    position: coordinates,
    title: address,
    map: map,
  });
})();
