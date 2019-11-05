const { CoralPayCConnect, Utilities } = require('coralpay-c-connect-node-sdk');

const { join } = require('path');

const run = async () => {
  const passphrase = 'some-passphrase';

  /*
  const coral = new CoralPayCConnect({
    cConnectServiceBaseUrl: 'http://localhost.com/', 
    cConnectPublicEncryptionKeyPath: 
      join(__dirname,'./keys/coralpay.public_key.text'), 
    privateKeyPath: join(__dirname, './keys/private_key.text'),
    passphrase: 'some-passphrase',
    userName: 'null',
    password: 'null',
    merchantId: 'null',
    terminalId: 'null',
    trace: false // enable this to see log of requests and responses or pass your custom logging function
  });
*/

  const utilities = new Utilities({
    publicEncryptionKeyPath: './keys/coralpay.public.key.txt',
     // join(__dirname,'./keys/coralpay.public_key.txt'), 
    privateKeyPath: './keys/private.key.txt', // join(__dirname, './keys/private_key.txt'),
    passphrase: 'some-passphrase',
    trace: true // enable this to see log of requests and responses or pass your custom logging function
  });

  const payload = await utilities.encryptRequest({ ray: 'mond' });
  // const payload = await coral.encryptRequest({ ray: 'mond' });
  console.log('This is the Payload:\n\n' + payload, '\n');
};

run();

