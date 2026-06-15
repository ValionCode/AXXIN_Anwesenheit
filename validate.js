const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
if (!match) {
  console.error('Script not found');
  process.exit(1);
}
const vm = require('vm');
try {
  new vm.Script(match[1]);
  console.log('OK');
} catch (err) {
  console.error(err.stack);
  process.exit(1);
}
