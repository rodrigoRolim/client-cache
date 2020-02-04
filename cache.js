function init () {

  function hasCache (chunk) {
    return (!(chunk.length < query.lines || chunk.includes(undefined))) ? chunk : 0 
  }
  function Cache () {
    this.cache = []
  }
  let cache = new Cache()
  cache.getCache = function (query) {
    let range = query.lines*query.page
    let start = range - query.lines
    let end = range
    let chunk = cache.slice(start, end)
    return hasCache(chunk)
  }
  cache.setCache = function (datas) {
    datas.map((item) => {
      this.cache[item.id] = item
    })
  }


  return cache
}
module.exports = init
