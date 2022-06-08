;(function () {
  const fetchSetting = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            address: 'http://localhost:3000/trace',
            data: [
              {
                target: '#test_id_1',
                eventId: '1',
                triggerType: 'click',
                eventDetail: {
                  col1: 'test',
                  col2: 'test',
                  col3: 'tset',
                  col4: 'tset',
                },
              },
              {
                target: 'button',
                eventId: '9',
                triggerType: 'mouseenter',
                eventDetail: {
                  col1: 'tesst',
                  col2: 'tset',
                },
              },
              {
                target: '[href="#"]',
                eventId: '9',
                triggerType: 'click',
                eventDetail: {
                  col1: 'tesst',
                  col2: 'tset',
                },
              },
              {
                target: '#test_id_5',
                eventId: '9',
                triggerType: 'click',
                eventDetail: {
                  col1: 'tesst',
                  col2: 'tset',
                },
              },
              {
                target: '#test_id_6',
                eventId: '9',
                triggerType: 'click',
                eventDetail: {
                  col1: 'tesst',
                  col2: 'tset',
                },
              },
            ],
          },
        })
      }, 2000)
    })
  }

  const trackTest = () => {
    fetchSetting().then((res) => {
      const {
        data: { address, data },
      } = res
      console.log(res)
      console.log(address, document.location.href)
      if (address !== document.location.href) return
      data.forEach((item) => {
        let el = document.querySelector(item.target)
        if (el === null) return
        const eventCols = Object.keys(item.eventDetail)
          .sort((a, b) => a - b)
          .map((col) => item.eventDetail[col])
        el.addEventListener(item.triggerType, () => {
          console.log([1, 1, 1, item.eventId, ...eventCols])
          window.alert([1, 1, 1, item.eventId, ...eventCols])
        })
      })
    })
  }
  trackTest()
})()
