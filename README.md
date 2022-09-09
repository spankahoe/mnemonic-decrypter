# mnemonic-decrypter
Decrypts accounts from a mnemonic

</br>

## How to install
```
npm install mnemonic-decrypter
```

</br>

## Usage Example
### Code Snippet
```
const decrypter = require('mnemonic-decrypter');

const mnemonic = "test test test test test test test test test test test test";
const firstDecryptedAccount = decrypter.decrypt(mnemonic);
const first2DecryptedAccounts = decrypter.decrypt(mnemonic,2);
const first200DecryptedAccounts = decrypter.decrypt(mnemonic,200);

console.log("First account: ", firstDecryptedAccount);
console.log("First 2 accounts: ", first2DecryptedAccounts);
console.log("First 200 accounts: ", first200DecryptedAccounts.length);
```
### Output
```
First account:  [
  {
    address: '0x72e37d393c70823113a7176ac1f7c579d2c5623e',
    key: 'e9dbd00767eef0e147dce36d0c2ffffffb8ecba9edeaad63f5ce7aa738c2c3a6'
  }
]
First 2 accounts:  [
  {
    address: '0x72e37d393c70823113a7176ac1f7c579d2c5623e',
    key: 'e9dbd00767eef0e147dce36d0c2ffffffb8ecba9edeaad63f5ce7aa738c2c3a6'
  },
  {
    address: '0xf49b089183ec02bad392630a82c0f5b5c3bfabe9',
    key: '581c170508a6746bddebaaec79666d186133580a2082f6797853179ebcec51f9'
  }
]
First 200 accounts:  200
```
