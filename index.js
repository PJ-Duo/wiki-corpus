const fs = require('fs');
const sax = require('sax');

function cleanText(text) {
  text = text.replace(/\s+/g, ' '); // Replace multiple whitespaces with a single whitespace
  text = text.replace(/\n/g, ''); // Remove newline characters
  text = text.replace(/\r/g, ''); // Remove carriage return characters
  text = text.replace(/(\W|^)(\d+)(\W|$)/g, '$1$3'); // Remove digits
  text = text.replace(/<.*?>/g, ''); // Remove HTML tags
  text = text.trim(); // Remove leading and trailing whitespaces
  return text;
}

async function makeCorpus(inFile, outFile) {
  const output = fs.createWriteStream(outFile, { encoding: 'utf-8' });
  let i = 0;
  const parser = sax.createStream(true, { lowercase: true });
  let title = '';
  let text = '';
  parser.on('opentag', (node) => {
    if (node.name === 'title') {
      title = '';
    } else if (node.name === 'text') {
      text = '';
    }
  });
  parser.on('text', (t) => {
    if (title !== '') {
      title += t;
    } else if (text !== '') {
      text += t;
    }
  });
  parser.on('closetag', (name) => {
    if (name === 'title') {
      title = cleanText(title);
    } else if (name === 'text') {
      text = cleanText(text);
      if (title && text) {
        output.write(text + '\n');
        i += 1;
        if (i % 10000 == 0) {
          console.log(`Processed ${i} articles`);
        }
      }
    }
  });
  const stream = fs.createReadStream(inFile);
  stream.pipe(parser);
  await new Promise((resolve, reject) => {
    stream.on('end', () => {
      output.close();
      console.log('Processing complete!');
      resolve();
    });
    stream.on('error', reject);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: node wiki-corpus.js <dump>');
  process.exit(1);
}

makeCorpus(process.argv[2], './out/output.txt');
