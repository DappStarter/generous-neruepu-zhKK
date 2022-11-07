require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember smile include private foster tuition'; 
let testAccounts = [
"0xa0152411c9a340c578d84ee18a9ac3b4ff95ce44bcaef9bac4284bc4e9b0fa77",
"0xa80cb97530e84378aeef01b502e6f352807cc7aeea0ff082351e3f03e6f8d8d6",
"0xa480fda4419d8c2c64621681abef8ff29720bbd24d9971c648cdfe7bfc32d3e1",
"0x42bcfac918e043caa4b0ed451d5c5e27d35a93e0edc50e852aa43fea1b8ce5da",
"0x753770214772a0a377e953261c758b94ec3b42bfedb67d97420d741a6abe3902",
"0x0486c85852f34cecd72dd9218e2f40ed74363b783f54dc8e61ab40bb5bcc2155",
"0x9f85d83f79fb00214522721430fc72175cc979fa3c75517f6ad840d0116d0151",
"0x1bd64b77981e4c08fd623c1269c61e3ede49a2d54002460d8c1cc97440fd02ea",
"0x31e6d63422a200980275259605a1a8d6471727aa163b3ed71c4f84b61b3766ab",
"0xd76b64d7b8931bd9fa7ed166a1edf18d9fdebbff5b8b868c4417d178fb822b94"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


