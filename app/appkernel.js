// app/appkernel.js
process.env.DEBUG = process.env.DEBUG || 'symbiose:*'

const Kernel = require('symbiose').Kernel
const path = require('path')

// Ensure that the current working directory is the good one
process.chdir(path.resolve(__dirname, '..'))

const registerSymbionts = [
  //'secret-dashboard',
  'site',
  'user'
]

if (Kernel.env === 'dev') {
  // push dev tool
  // registerSymbionts.push('devbar')
}

// http://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
if (Kernel.env === 'prod' && process.env('NODE_ENV') !== 'production') {
  console.log('You forgot to set the NODE_ENV environment variable to "production".')
  process.exit(1)
}

const AppKernel = new Kernel({
  config: [
    'app/config/config.yml',
    /*
     * If file doesn't exist, symbiose will throw an error.
     */
    `app/config/config_${Kernel.env}.yml`
  ],
  symbionts: registerSymbionts
})

module.exports = AppKernel
