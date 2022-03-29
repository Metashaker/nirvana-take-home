const fs = require('fs')

function save(item, path){
  if (!fs.existsSync(path)) {
      fs.promises.writeFile(path, JSON.stringify([...therapistSessions,item]));
  } else {
      var data = fs.readFileSync(path);  
      var list = (data.length) ? JSON.parse(data): [];
      if (list instanceof Array) list.push(item)
      else list = [item]  
      fs.promises.writeFile(path, JSON.stringify(list));
      return list
  }
}

module.exports = save