
const timeSounds = process.argv.slice(2); 

for (let item of timeSounds) {
  if (Number(item) >= 1) {
    let counter = Number(item) * 1000; 

    setTimeout(() => {
      process.stdout.write('\x07');
    }, counter);
  }

}

