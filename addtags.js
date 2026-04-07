const fs = require('fs');
let c = fs.readFileSync('app/components/page.tsx', 'utf8');
c = c.replace(/    name: "(.*?)",/g, (match, name) => {
  const words = name.toLowerCase().split(/[\s\&\/\(\)]+/).filter(w => w.length > 2);
  let tagsStr = JSON.stringify(words);
  return '    name: "' + name + '",\n    tags: ' + tagsStr + ',';
});
fs.writeFileSync('app/components/page.tsx', c);
