const http = require('http')
const ObjectRandom = require('./init')
const fs = require('fs')
const url = require('url')
const data = require('./list.json')
const Pagination = require('./pagination')

http.createServer(function (req, res) {
  const uri = url.parse(req.url, true)
  const pathname = uri.pathname
  const query = uri.query

  if (pathname == '/generate') {
    let objectRandom = new ObjectRandom(fs)
    objectRandom.generate()
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('lista gerada');
    res.end()
  }
  if (pathname == '/list') {
    let pagination = new Pagination(data)
    let range = query.lines*query.page
    let start = range - query.lines
    let end = range
    let chunk = cache.slice(start, end)
    
    if (chunk.length < query.lines || chunk.includes(undefined)) {

      let response = pagination.getPages(query)
      res.writeHead(200, {'Content-Type': 'application/json'});
      response.map((item) => {
        cache[item.id] = item
      })
      res.write(JSON.stringify(response))
      res.end()
      return
    }

    res.write(JSON.stringify(chunk))
    res.end()
  }
  if (pathname == '/cache') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(cache))
    res.end()
  }
  res.end('Invalid Request')
}).listen(3000)
