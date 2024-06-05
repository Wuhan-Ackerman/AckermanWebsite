 // 初始化地图
 var map = new AMap.Map('AMapContainer', {
    zoom: 16,
    center: [114.308702,30.60838] // 将中心点设置为湖北武汉的经纬度
  });

  // 添加一个标记在湖北武汉
  var marker = new AMap.Marker({
    position: [114.308702,30.60838], // 武汉的经纬度
    title:'武汉市江岸区中山大道1505号企业天地1号15层',
    map: map
  });