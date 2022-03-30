const fs = require('fs')

function save(item,seedObject, path){
  if (!fs.existsSync(path)) {
      const list = fs.promises.writeFile(path, JSON.stringify([...seedObject,item]));
      return list
  } else {
      var data = fs.readFileSync(path);  
      var list = (data.length) ? JSON.parse(data): [];
      if (list instanceof Array) list.push(item)
      else list = [item]  
      fs.promises.writeFile(path, JSON.stringify(list));
      return item
  }
}

module.exports = save