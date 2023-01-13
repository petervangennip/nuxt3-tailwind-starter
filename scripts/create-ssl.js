#!/usr/bin/env node
/**
 * Switches nodejs version based on .nvmrc file
 */
const fs = require('fs');
const exec = require('child_process').exec;
const dir = './.ssl';

try {
  console.log(`\nCreating SSL certificates...\n`);

  exec(`mkcert -install && mkcert localhost`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout, stderr);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.rename('./localhost-key.pem', './.ssl/localhost-key.pem', (err) => {
        if (err) throw err;
      });
      fs.rename('./localhost.pem', './.ssl/localhost.pem', (err) => {
        if (err) throw err;
      });
      console.error('\nCertificates created.\n');
    }
  });
} catch (err) {
  console.error('Error creating SSL certificates!');
}
