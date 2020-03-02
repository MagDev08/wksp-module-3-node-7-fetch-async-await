// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    
    try{
        let res = await rp('http://api.open-notify.org/iss-now.json')
        let data = await JSON.parse(res);
        console.log(data);
        return {
                lat: data["iss_position"].latitude,
                lng: data["iss_position"].longitude
            };
}
    catch (err) { console.log(err);
    }
}

getIssPosition();