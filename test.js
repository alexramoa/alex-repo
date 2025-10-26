console.log('starting test...');
console.log('waiting 3 seconds...');
setTimeout(() => {
  console.log('test is done!');
  process.exit(0); // <- indica que terminó correctamente
}, 3000);
