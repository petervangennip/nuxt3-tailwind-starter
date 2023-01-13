#!/usr/bin/env node
/**
 * Switches nodejs version based on .nvmrc file
 */
const fs = require('fs');
const exec = require('child_process').exec;

try {
  const version = fs.readFileSync('.nvmrc', 'utf8');
  console.log(`\n\n\nSwitching nodejs version to ${version}`);

  exec(`nvm use ${version}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout, stderr);
    }
  });
} catch (err) {
  console.error('No .nvmrc file found, should be in the root of the project!');
}
