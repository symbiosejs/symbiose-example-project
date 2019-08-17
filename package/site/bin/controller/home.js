// package/site/controller/home.js
function HomeController() {

}

module.exports = HomeController


HomeController.prototype.test = () => '---O--- <-- this is me!'


HomeController.prototype.homepage = function (req, res) {
  res.send('Hello World')
};