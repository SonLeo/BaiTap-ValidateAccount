function validateAccount(account) {
    const REGEX_ACCOUNT = /^[_a-z0-9]{6,}$/;

    if (REGEX_ACCOUNT.test(account)) {
        console.log(`Account ${account} is valid`);
    } else {
        console.log(`Account ${account} is not valid`);
    }
}

validateAccount('123abc_');
validateAccount('_abc123');
validateAccount('______');
validateAccount('123456');
validateAccount('abcdefg');
validateAccount('.@');
validateAccount('12345');
validateAccount('1234_');
validateAccount('abcde ');