#!/usr/bin/env node
import { docopt } from 'docopt';
import upfind from 'upfind';
const doc = `
Usage:
  upfind <filename>
`;
let args = docopt(doc, {version: require('../package.json').version });
let found = upfind(process.cwd(), args['<filename>']);
if (!found) {
    console.error(`could not find ${args['<filename>']}`);
    process.exit(1);
}
console.log(found);
