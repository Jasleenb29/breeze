const dress = require("../breathe/functions/dress");
const longlat = require("../breathe/functions/longlat.js");
async function main() {
    let { lat, lng } = await longlat("Rockville, MD");
    console.log(await dress(lat, lng));
}

main();
