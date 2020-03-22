module.exports = function create() { 
    let resolve, reject;
    const promise = new Promise((rslv, rjct) => (resolve = rslv) && (reject = rjct));

    return [promise, resolve, reject]
}