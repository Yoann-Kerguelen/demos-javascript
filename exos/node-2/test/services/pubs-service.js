const pubJSON = require('../mocks/pubs.json');

function listAllPub() {
    var res;
    for (let index = 0; index < pubJSON['pubs'].length; index++) {
        res += pubJSON['pubs'][i];
    }
    return res;
}

function listAllPubOpen(day) {
    var res;
    for (let index = 0; index < pubJSON['pubs'].length; index++) {
        for (let j = 0; j < pubJSON['pubs'][i]['openDays'].length; j++) {
            if (pubJSON['pubs'][i]['openDays'][j] === day) {
                res += pubJSON['pubs'][i];
            }
        }
    }
    return res;
}

module.exports = {
    listAllPub: listAllPub,
    listAllPubOpen: listAllPubOpen
};


/*
npm install moment --save

const moment = require('moment'); //require

moment().format('MMMM Do YYYY, h:mm:ss a'); // February 13th 2021, 1:49:03 am
moment().format('dddd');                    // Saturday
moment().format("MMM Do YY");               // Feb 13th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();                         	// 2021-02-13T01:49:29+01:00
moment("20111031", "YYYYMMDD").fromNow(); 	// 9 years ago
moment("20120620", "YYYYMMDD").fromNow(); 	// 9 years ago
moment().startOf('day').fromNow();        	// 2 hours ago
moment().endOf('day').fromNow();          	// in a day
moment().startOf('hour').fromNow();      	// an hour ago
moment().subtract(10, 'days').calendar(); 	// 02/03/2021
moment().subtract(6, 'days').calendar();  	// Last Sunday at 1:50 AM
moment().subtract(3, 'days').calendar();  	// Last Wednesday at 1:50 AM
moment().subtract(1, 'days').calendar();  	// Yesterday at 1:50 AM
moment().calendar();                      	// Today at 1:50 AM
moment().add(1, 'days').calendar();       	// Tomorrow at 1:50 AM
moment().add(3, 'days').calendar();       	// Tuesday at 1:50 AM
moment().add(10, 'days').calendar();     	// 02/23/2021
moment.locale();         					// en
moment().format('LT');   					// 1:50 AM
moment().format('LTS');  					// 1:50:49 AM
moment().format('L');    					// 02/13/2021
moment().format('l');    					// 2/13/2021
moment().format('LL');   					// February 13, 2021
moment().format('ll');   					// Feb 13, 2021
moment().format('LLL');  					// February 13, 2021 1:50 AM
moment().format('lll');  					// Feb 13, 2021 1:50 AM
moment().format('LLLL'); 					// Saturday, February 13, 2021 1:50 AM
moment().format('llll');					// Sat, Feb 13, 2021 1:51 AM
*/