/**
 * ChampController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function (req, res) {
    Champ.find()
      .then((champs) => {
        if (!champs || champs.length === 0) {
          return res.send({
            success: false,
            message: 'No records found',
          });
        }
        return res.send({
          success: true,
          message: 'Records fetched ',
          data: champs,
        });
      })
      .catch((err) => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to fetch records',
        });
      });
  },

  create: (req, res) => {
    sails.log.debug(req.allParams());
    Champ.create(req.allParams()).then((champ) => {
      res.send({
        'success': true,
        'message': 'Record created Successfully'
      });
    }).catch((err) => {
      sails.log.debug(err);
      res.send({
        'success': false,
        'message': 'Unable to created record'
      });
    });
  },

  update: (req, res) => {
    sails.log.debug(req.param('id'));
    Champ.update(req.param('id'), req.allParams()).then((champ) =>{
      res.send({
        'success': true,
        'message': 'Record updated Successfully',
        'data': champ
      });
    }).catch((err) => {
      sails.log.debug(err);
      res.send({
        'success': false,
        'message': 'Unable to update record'
      });
    });
  },
  delete: (req, res) =>{
    sails.log.debug(req.param('id'));
    Champ.destroy(req.param('id')).then((champ) =>{
      res.send({
        'success': true,
        'message': 'Record deleted Successfully',
        'data': champ
      });
    }).catch((err) => {
      sails.log.debug(err);
      res.send({
        'success': false,
        'message': 'Unable to delete record'
      });
    });
  }
};
