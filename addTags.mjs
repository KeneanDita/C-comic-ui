import fs from 'fs';

const path = 'app/components/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/    name: "(.*?)",/g, (match, name) => {
  const words = name.toLowerCase().split(/[\s&/()]+/).filter(w => w.length > 2);
  return \    name: "\",\n    tags: \,\;
});

fs.writeFileSync(path, content, 'utf8');
