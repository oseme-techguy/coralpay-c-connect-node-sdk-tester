const { CoralPayCConnect, Utilities } = require('coralpay-c-connect-node-sdk');
const { join } = require('path');


const run = async () => {
  const passphrase = 'some-passphrase';


  console.log("\n==========================================\n");
  console.log("Runing the CoralPayCConnect test...");
  console.log("\n==========================================\n");


  const coral = new CoralPayCConnect({
    cConnectServiceBaseUrl: 'http://localhost.com/', 
    cConnectPublicEncryptionKeyPath: join(__dirname,'./keys/coralpay.public_key.txt'), 
    privateKeyPath: join(__dirname, './keys/private_key.txt'),
    passphrase: 'some-passphrase',
    username: 'null',
    password: 'null',
    merchant_id: 'null',
    terminal_id: 'null',
    trace: true // enable this to see log of requests and responses or pass your custom logging function
  });

  const refRequest = await coral.invokeReference({ amount: 1200, channel: "WEB", trace_id: "1234567890" });


  console.log("\n==========================================\n");
  console.log("Finished runing the CoralPayCConnect test");
  console.log("\n==========================================\n\n");




  console.log("\n\n==========================================\n");
  console.log("Runing the Utilities test...");
  console.log("\n==========================================\n");
  const utilities = new Utilities({
    publicEncryptionKeyPath: './keys/coralpay.public_key.txt',
     // join(__dirname,'./keys/coralpay.public_key.txt'), 
    privateKeyPath: './keys/private_key.txt', // join(__dirname, './keys/private_key.txt'),
    passphrase: 'some-passphrase',
    trace: true // enable this to see log of requests and responses or pass your custom logging function
  });

  const payload = await utilities.encryptRequest({ ray: 'mond' });
  // const payload = await coral.encryptRequest({ ray: 'mond' });
  console.log('This is the Payload:\n\n' + payload, '\n');

  console.log("\n==========================================\n");
  console.log("Finished runing the Utilities test");
  console.log("\n==========================================\n");

};

run();

