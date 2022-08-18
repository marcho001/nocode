function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  )
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i]
  }
  return arr2
}

;(function () {
  function trackTest() {
    var traceData = JSON.parse({}) // 埋馬 JSON 寫這邊
    // 無組織 ID 或 產業 ID 處理

    if (!traceData.orgid || !traceData.industry_id) {
      console.error('請設定組織 ID 和產業 ID')
      return
    } // 組合 domain 供檢查

    var path = ''

    if (document.location.pathname.length > 1) {
      path = document.location.pathname
    }

    var origin = document.location.origin + path
    var domainConcat = document.location.hostname + path // 篩選出符合當前頁面的資料

    var filterWithDomain = traceData.data.filter(function (item) {
      return item.domain === origin || item.domain === domainConcat
    }) // 篩選出的資料埋事件

    filterWithDomain.forEach(function (item) {
      var el = document.querySelector(item.html_id)

      if (el === null) {
        console.error('selector 錯誤')
        return
      }

      el.addEventListener(item.triggerType, function () {
        var _dos

        console.log(
          [traceData.orgid, traceData.industry_id, item.kind, item.type].concat(
            _toConsumableArray(item.col)
          )
        )
        window.alert(
          [traceData.orgid, traceData.industry_id, item.kind, item.type].concat(
            _toConsumableArray(item.col)
          )
        )

        ;(_dos = dos).beaconSend.apply(
          _dos,
          [traceData.orgid, traceData.industry_id, item.kind, item.type].concat(
            _toConsumableArray(item.col)
          )
        )
      })
    })
  }

  trackTest()
})()
