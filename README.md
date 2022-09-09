# mnemonic-decrypter
Decrypts accounts from a provided mnemonic

## How to use
<code>
  const decrypter = require('mnemonic-decrypter');
  
  <code>const mnemonic = 'test test test test test test test test test test test test';</code>
  <code>const firstDecryptedAccount = decrypter.decrypt(mnemonic);</code>
  <code>const first2DecryptedAccounts = decrypter.decrypt(mnemonic,2);</code>
  <code>const first200DecryptedAccounts = decrypter.decrypt(mnemonic,200);</code>

  console.log("First account: ", firstDecryptedAccount);
  console.log("First 2 accounts: ", first2DecryptedAccounts);
  console.log("First 200 accounts: ", first200DecryptedAccounts.length);
</code>
