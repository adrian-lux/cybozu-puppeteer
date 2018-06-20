/*
https://discord.gg/8KEk74
*/

const {
    URL
} = require('url');
const fse = require('fs-extra'); // v 5.0.0
const path = require('path');


const puppeteer = require('puppeteer');
const Page = require('puppeteer/lib/page');
const CREDS = require('./creds');



(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        dumpio: true
    });



    let response;
    let cookies;
    /*browserContext.newPage*/

    /*
        // Create a new incognito browser context.
    const context = await browser.createIncognitoBrowserContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    */

    let page = await browser.newPage();

/*    const client = await page.target().createCDPSession();
await client.send('Page.setDownloadBehavior', {
  behavior: 'allow', downloadPath: './downloads/'
});*/


    await page.goto('https://esu2.cybozu.com/login', {
        waitUntil: 'networkidle2'
    });
    await page.screenshot({
        path: 'screenshot_1.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });


    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

    await page.screenshot({
        path: 'screenshot_2.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    console.log(page);
    console.log("-----");


    const USERNAME_SELECTOR = '#login-form-outer > form > div.login-dialog-content > div.form-username-slash.form-text-outer ';
    const PASSWORD_SELECTOR = '#login-form-outer > form > div.login-dialog-content > div.form-password-slash.form-text-outer';
    const BUTTON_SELECTOR = '#login-form-outer > form > div.login-dialog-footer > div.login-dialog-footer-right > input';

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    await page.screenshot({
        path: 'screenshot_3.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    Promise.all([
      page.click(BUTTON_SELECTOR),
      page.waitForNavigation({
            waitUntil: 'networkidle0'
        }),
]);

    cookies = await page._client.send('Network.getAllCookies');
    await page.waitForNavigation();
    console.log(page);

    await page.screenshot({
        path: 'screenshot_4.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    const token = page.token;



    console.log("TEST TEST TEST HERE 0!");

    Promise.all([
      page.click('#header-menu-left-cybozu > div > a'),
      page.waitForNavigation(),
]);
    await page.waitFor(3000);

    await page.screenshot({
        path: 'screenshot_5.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    console.log("TEST TEST TEST HERE 1!");
    Promise.all([
      page.click('#appIconMenuFrame > div.vr_naviAppMenu > span:nth-child(9) > a > span.appmenucss.appMenuAddressIndex'),
      page.waitForNavigation(),
]);
    console.log("TEST TEST TEST HERE 2!");

    await page.waitFor(3000);
    await page.screenshot({
        path: 'screenshot_6.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    Promise.all([
      page.click('#content-wrapper > div.content > div > div.menubar > table > tbody > tr > td:nth-child(1) > span.menubarTextLink > a'),
      page.waitForNavigation(),
]);
    // ここで人名と会社のページまで進んだ。    

    console.log("TEST TEST TEST HERE 3!");

    await page.waitFor(3000);
    await page.screenshot({
        path: 'screenshot_7.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    Promise.all([
      page.click('#content-wrapper > div.content > div > fieldset:nth-child(2) > div > a:nth-child(2)'),
      page.waitForNavigation(),
]);

    console.log("TEST TEST TEST HERE 4!");

    await page.waitFor(3000);

    await page.screenshot({
        path: 'screenshot_8.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    let i;
    for (let i = 1; i <= 24; i++) {


        Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_mainColumn > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > select > option:nth-child(' + i + ')'),
      page.waitForNavigation(),
]);

        await page.waitFor(100);


        Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_mainColumn > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td.vr_selectButtons > span:nth-child(1) > input'),
      page.waitForNavigation(),
]);

        await page.waitFor(100);
    }
    await page.waitFor(500);

    await page.screenshot({
        path: 'screenshot_9.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton '),
      page.waitForNavigation(),
]);

    await page.waitFor(2000);

    await page.screenshot({
        path: 'screenshot_10.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });
    
  /*  const reportLink = await page.$('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton');
  	await reportLink.click({ clickCount: 1, delay: 100 });
*/
    Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton '),
      page.waitForNavigation(),
]);

    await page.screenshot({
        path: 'screenshot_11.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });



    /*   let s = "https://esu2.cybozu.com/o/ag.cgi/addressperson.csv";
        //the test opens an about:blank to start - ignore this
        if (s == 'about:blank') {
            return;
        }
        //unencode the characters after removing the content type
        s = s.replace("data:text/csv;charset=utf-8,", "");
        //clean up string by unencoding the %xx
        ...
        fs.writeFile("./tmp/download.csv", s, function(err) {
            if(err) {
                console.log(err);
                return;
            }
            console.log("The file was saved!");
        }); */

/* const result = await page.evaluate(async () => {
    const form = document.querySelector('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton ');
    const data = new FormData(form);
    data.append('btConfirmer', 'Confirmer');
page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton ')
    return fetch(form.action, {
      method: 'POST',
      credentials: 'include',
      body: data,
    })
    .then(response => response.text());
  });*/
    
/*    await page.evaluate(async () => {
  const ele = document.evaluate('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton', document,
      null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (ele) {
    ele.click();
  }
});*/

    await page.waitFor(10000);

    await page.screenshot({
        path: 'screenshot_12.png',
        clip: {
            x: 0,
            y: 0,
            width: 1024,
            height: 800
        }
    });

    await browser.close();

})();









(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });

    let response;
    let cookies;

    const page = await browser.newPage();


    await page.goto('https://esu2.cybozu.com/login', {
        waitUntil: 'networkidle2'
    });

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

    console.log(page);
    console.log("-----");


    const USERNAME_SELECTOR = '#login-form-outer > form > div.login-dialog-content > div.form-username-slash.form-text-outer ';
    const PASSWORD_SELECTOR = '#login-form-outer > form > div.login-dialog-content > div.form-password-slash.form-text-outer';
    const BUTTON_SELECTOR = '#login-form-outer > form > div.login-dialog-footer > div.login-dialog-footer-right > input';

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    Promise.all([
      page.click(BUTTON_SELECTOR),
      page.waitForNavigation({
            waitUntil: 'networkidle0'
        }),
]);

    cookies = await page._client.send('Network.getAllCookies');
    await page.waitForNavigation();
    console.log(page);



    const token = page.token;



    console.log("TEST TEST TEST HERE 0!");

    Promise.all([
      page.click('#header-menu-left-cybozu > div > a'),
      page.waitForNavigation(),
]);
    await page.waitFor(3000);

    console.log("TEST TEST TEST HERE 1!");
    Promise.all([
      page.click('#appIconMenuFrame > div.vr_naviAppMenu > span:nth-child(9) > a > span.appmenucss.appMenuAddressIndex'),
      page.waitForNavigation(),
]);
    console.log("TEST TEST TEST HERE 2!");

    await page.waitFor(3000);


    Promise.all([
      page.click('#content-wrapper > div.content > div > div.menubar > table > tbody > tr > td:nth-child(1) > span.menubarTextLink > a'),
      page.waitForNavigation(),
]);
    // ここで人名と会社のページまで進んだ。    

    console.log("TEST TEST TEST HERE 3!");

    await page.waitFor(3000);


    Promise.all([
      page.click('#content-wrapper > div.content > div > fieldset:nth-child(4) > div > a:nth-child(3)'),
      page.waitForNavigation(),
]);

    console.log("TEST TEST TEST HERE 4!");

    await page.waitFor(3000);

    let i;
    for (let i = 1; i <= 24; i++) {


        Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_mainColumn > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > select > option:nth-child(' + i + ')'),
      page.waitForNavigation(),
]);

        await page.waitFor(100);


        Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_mainColumn > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td.vr_selectButtons > span:nth-child(1) > input'),
      page.waitForNavigation(),
]);

        await page.waitFor(100);
    }
    await page.waitFor(500);

    Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton '),
      page.waitForNavigation(),
]);

    await page.waitFor(2000);

    Promise.all([
      page.click('#content-wrapper > div.content > div > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div.vr_formCommitWrapper > p > input.vr_hotButton '),
      page.waitForNavigation(),
]);

    await page.waitFor(2000);

    await page.waitFor(2000);

    await browser.close();

})();
