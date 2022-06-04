if (process.env.VERCEL_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
