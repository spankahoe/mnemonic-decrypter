"use strict";
/*
 * @DIIMIIM
 * 25 mar 2022
 * This code will return an array of private keys related to the mnemonic input
 */
const bip39 = require("bip39");
const { hdkey } = require('ethereumjs-wallet');

function decrypt(mnemonic, nrOfAccounts) {
	let accounts = [];
	try {
	    const seed = bip39.mnemonicToSeedSync(mnemonic);
	    const hdwallet = hdkey.fromMasterSeed(seed);
	    const wallet_hdpath = "m/44'/60'/0'/0/";
	    for ( let i = 0; i < nrOfAccounts; ++i ) {
	    	let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
	    	let address = "0x" + wallet.getAddress().toString("hex");
	    	let key = wallet.getPrivateKey().toString("hex");
	    	accounts.push({ address: address , key: key });
	    }
	} catch (err) {
		console.error(err);
	}
	return accounts;
}
exports.decrypt = decrypt
