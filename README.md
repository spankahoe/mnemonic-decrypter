# mnemonic-decrypter
Decrypts accounts from a provided mnemonic

## How to use
<code>
const decrypter = require('mnemonic-decrypter');

const mnemonic = "test test test test test test test test test test test test";
const firstDecryptedAccount = decrypter.decrypt(mnemonic);
const first2DecryptedAccounts = decrypter.decrypt(mnemonic,2);
const first200DecryptedAccounts = decrypter.decrypt(mnemonic,200);

console.log("First account: ", firstDecryptedAccount);
console.log("First 2 accounts: ", first2DecryptedAccounts);
console.log("First 200 accounts: ", first200DecryptedAccounts.length);
</code>
