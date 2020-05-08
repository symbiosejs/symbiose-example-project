// package/user/index.js
const Symbiont = require('symbiont')
const path = require('path')

const myPackage = new Symbiont()

const getController = (filename) => {
  const filepath = path.resolve(__dirname, 'controller', filename)
  const Controller = require(filepath)
  return new Controller()
}

myPackage.registerController('user', getController('user.js'))

module.exports = myPackage
