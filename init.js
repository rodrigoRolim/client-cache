function init (fs) {

  function randomString () {
    let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'u']
    var string = ''
    for (let j = 0; j < 11; j++) {
      let i = Math.floor(Math.random() * 11)
      string += characters[i];
    }
    return string
  }
  function write (json) {
    fs.writeFile("./list.json", JSON.stringify(json), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!')
    })
  }
  function ObjectRandom (fs) {
    this.fs = fs
  }
  let objectRandom = new ObjectRandom(fs)
  objectRandom.generate = function() {
    let arrObject = []
    for (let i = 0; i < 2000; i++) {
      arrObject.push({id: i, value: randomString()})
    }
    write(arrObject)
  }
  return objectRandom
}
module.exports = init
