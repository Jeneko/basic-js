const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  
  if (!validateSampleValue(sampleActivity)) return false;

  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const ln = Math.log(MODERN_ACTIVITY / sampleActivity);

  return Math.ceil(ln / k);
}

function validateSampleValue(value) {
  if (typeof value !== 'string') return false;

  value = value.trim();
  if (value.length === 0) return false;

  value = Number(value);
  if (isNaN(value)) return false;

  if (value <= 0 || value > MODERN_ACTIVITY) return false;

  return true;
}

module.exports = {
  dateSample
};
