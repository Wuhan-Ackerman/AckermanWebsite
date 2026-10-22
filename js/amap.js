const coordinates = [114.30,30.60];

// 初始化地图
const map = new AMap.Map("AMapContainer", {
  zoom: 16,
  center: coordinates,
});

// 添加一个标记
const marker = new AMap.Marker({
  position: coordinates,
  title: "武汉市江岸区四唯街道京汉大道1268号铂仕汇国际广场16楼",
  map,
});
