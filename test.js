;(function () {
  function trackTest() {
    fetch(`https://warm-lowlands-80428.herokuapp.com/cdp_test?address=${document.location.href}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        res.data.forEach((item) => {
          let el = document.querySelector(item.target)
          if (el === null) return

          el.addEventListener(item.triggerType, () => {
            console.log([1, 1, 1, item.eventId, ...item.eventDetail])
            window.alert([1, 1, 1, item.eventId, ...item.eventDetail])
            dos.beaconSend(1, 1, 1, item.eventId, ...item.eventDetail)
          })
        })
      })
  }
  trackTest()
})()
