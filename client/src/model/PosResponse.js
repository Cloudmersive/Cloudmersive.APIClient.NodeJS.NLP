/**
 * nlpapi
 * The powerful Natural Language Processing APIs let you perform part of speech tagging, entity identification, sentence parsing, and much more to help you understand the meaning of unstructured text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PosSentence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PosSentence'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.PosResponse = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.PosSentence);
  }
}(this, function(ApiClient, PosSentence) {
  'use strict';




  /**
   * The PosResponse model module.
   * @module model/PosResponse
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>PosResponse</code>.
   * Part of speech tag result
   * @alias module:model/PosResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PosResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PosResponse} obj Optional instance to populate.
   * @return {module:model/PosResponse} The populated <code>PosResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TaggedSentences')) {
        obj['TaggedSentences'] = ApiClient.convertToType(data['TaggedSentences'], [PosSentence]);
      }
    }
    return obj;
  }

  /**
   * Sentences in the string
   * @member {Array.<module:model/PosSentence>} TaggedSentences
   */
  exports.prototype['TaggedSentences'] = undefined;



  return exports;
}));


