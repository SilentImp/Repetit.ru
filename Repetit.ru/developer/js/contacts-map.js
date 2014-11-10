function fid_141560463605747081121(ymaps) {
  var map = new ymaps.Map("ymaps-map-id_141560463605747081121", {
      center: [37.67285449999995, 55.72091503107721],
      zoom: 14,
      type: "yandex#map"
  });
  map.controls.add("zoomControl").add("mapTools").add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid"]));
  map.geoObjects.add(new ymaps.Placemark([37.672855, 55.718202], {
      balloonContent: "Ассоциация репетиторов"
  }, {
      preset: "twirl#lightblueDotIcon"
  }));
};