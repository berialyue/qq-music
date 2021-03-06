import songAPI from 'api/song'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  let newArr = arr.slice()
  for (let i = 0; i < newArr.length; i++) {
    let j = getRandomInt(0, i)
    let t = newArr[i]
    newArr[i] = newArr[j]
    newArr[j] = t
  }
  return newArr
}

export function deleteNull(list) {
  let arr = list.slice()
  let i = arr.length
  while (i--) {
    if (arr[i].url === null) {
      arr.splice(i, 1)
    }
  }
  return arr
}

export function getSongUrl(list) {
  let arr = list.slice()
  let flag = 0
  arr.forEach((item, index, array) => {
    songAPI.getSongUrl(item.id).then(res => {
      if (res.data.code === 200) {
        item.url = res.data.data[0].url
      }
      flag++
      if (flag === array.length) {
        deleteNull(array)
      }
    })
  })
  return arr
}

export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
