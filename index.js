#!/usr/bin/env node

const Browser = require("zombie");

const browser = new Browser({
	userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
	strictSSL: false
});

function usage() {
	console.log("Usage: gsnetguest USERNAME PASSWORD");
	console.log("\nYou must be connected to the network before running this command.");
}

async function main() {
	if (process.argv.length < 2) {
		usage();
		process.exit(0);
	}

	const username = process.argv[2];
	const password = process.argv[3];
	if (!username || !password) {
		console.error("Error: missing parameter.");
		usage();
		process.exit(1);
	}

	console.log(`${username}/${password}`);

	try {
		// go the connect website
		await browser.visit("http://msftconnecttest.com/");

		// fill user and pass
		browser.fill("user.username", username);
		browser.fill("user.password", password);
		browser.document.forms[0].submit();
		await browser.wait();

		// confirm to connect
		browser.document.forms[0].submit();
		await browser.wait();
		// TODO: check why we need to use the forms.submit above instead of this
		// await browser.click("ui_login_signon_button");
		// await browser.click("ui_post_access_continue_button");
	} catch (e) {
		if (e.message) console.log(e.message);
		console.log(e);
	}
}

main()
	.then(() => { console.log('success'); process.exit(0); })
	.catch(e => { console.error(e); process.exit(1); });
