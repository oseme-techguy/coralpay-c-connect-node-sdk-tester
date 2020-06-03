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

  const encryptedResp = '85010c03c69c19e7bdf8918f0107fc09f85b28668a02765290531425e601f665298821012363798d6473e61a150b9c91a6d9c202931f3c34c6f755ce18eb0c77435ff01113023131e70a668379d5435dc24e56aae726b294565736b431c044ddf006d08582fb48d32177a15e3cc86141ff505b73a89fca3f769ec9fc3cfbe02a1bd38df9dcdc88881f69e74413baebf23fe09f57ae6fb114a32496c354e8c334d430b9eb1dc891e8ce92afda2b504d0a63d7d404c612eb35e465f2c45f1c4e38f0b16e14e5a94f28cc3c67b82701b180a3e5ed4d2db84fc472121dc089aa90894483cd2189fa1a70f9523ffbe321b0dd7f704d076f93c4e9ae835e5183a8ff317c6a4ccb897d2aa24a1cfdc05459b3d2b0014580ea2ca09a150638d8d76a508736f924cd0c73ee7dd9f6f5084d4e4567c15d0c325d350fa85be7d55852d19fc4084569c7242da60335e0d3e305cce596e8d1204bbef1c3ed1fff3f49130db3f72d100a0b0d6aa3bb17945d2402a37067d60dd3118d72b186cfb92131fe6d50a7ae4ceca542864e1aa2b4337ffd81b5640c817813f8ca9161b172ef82b0bc72b38e8dcc83124fabe7539530f4c7997c0357cfe170e0137e4d167d44d6c508d07af9';
  const responseHere = await coral.decryptResponse(encryptedResp);
  console.log('\nThe plain response: ', responseHere);

  // const refRequest = await coral.invokeReference({ amount: 1200, channel: "WEB", trace_id: "1234567890" });


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

