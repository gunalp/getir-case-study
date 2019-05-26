const isReallyNull = (value) => (typeof value === 'undefined' || Object.keys(value).length === 0 || value === undefined || value === null || value.length === 0) ? true : false;

module.exports = {
  isReallyNull
}