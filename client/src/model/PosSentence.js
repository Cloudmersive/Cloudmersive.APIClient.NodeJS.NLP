/**
 * nlpapiv2
 * The powerful Natural Language Processing APIs (v2) let you perform part of speech tagging, entity identification, sentence parsing, and much more to help you understand the meaning of unstructured text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PosTaggedWord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PosTaggedWord'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.PosSentence = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.PosTaggedWord);
  }
}(this, function(ApiClient, PosTaggedWord) {
  'use strict';




  /**
   * The PosSentence model module.
   * @module model/PosSentence
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>PosSentence</code>.
   * Sentence in a POS tag result
   * @alias module:model/PosSentence
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PosSentence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PosSentence} obj Optional instance to populate.
   * @return {module:model/PosSentence} The populated <code>PosSentence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Words')) {
        obj['Words'] = ApiClient.convertToType(data['Words'], [PosTaggedWord]);
      }
    }
    return obj;
  }

  /**
   * Words in the sentence
   * @member {Array.<module:model/PosTaggedWord>} Words
   */
  exports.prototype['Words'] = undefined;



  return exports;
}));


