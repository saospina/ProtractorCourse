exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['submission.js'],
    capabilities: {
        browserName: 'chrome'
    }
};