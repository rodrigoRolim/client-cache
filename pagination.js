function init (data) {
  function Pagination (data) {
    this.data = data
  }
  let pagination = new Pagination(data)
  pagination.getPages = function (params) {
    let book = this.data.length
    let pages = book/params.lines
    if (params.page > pages) {
      throw new Error('passou')
    }
    let linesRange = params.lines*params.page
    let start = linesRange - params.lines
    let end = linesRange
    return this.data.slice(start, end)
  }
  return pagination
}

module.exports = init
