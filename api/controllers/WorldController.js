/**
 * WorldController
 *
 * @description :: Server-side logic for managing Worlds
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `WorldController.hello()`
   */

  hello: function (req, res) {
    return res.json({
      todo: 'hello() is not implemented yet!'
    });
  },
  bye: function (req, res) { 
    return res.json({
      bye: 'function needs to be written'
    });
  }
};

