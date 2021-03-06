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
    define(['ApiClient', 'model/RephrasedSentenceOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RephrasedSentenceOption'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.RephrasedSentence = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.RephrasedSentenceOption);
  }
}(this, function(ApiClient, RephrasedSentenceOption) {
  'use strict';




  /**
   * The RephrasedSentence model module.
   * @module model/RephrasedSentence
   * @version 2.1.1
   */

  /**
   * Constructs a new <code>RephrasedSentence</code>.
   * One input sentence and associated rephrasing results
   * @alias module:model/RephrasedSentence
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RephrasedSentence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RephrasedSentence} obj Optional instance to populate.
   * @return {module:model/RephrasedSentence} The populated <code>RephrasedSentence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SentenceIndex')) {
        obj['SentenceIndex'] = ApiClient.convertToType(data['SentenceIndex'], 'Number');
      }
      if (data.hasOwnProperty('OriginalSentenceText')) {
        obj['OriginalSentenceText'] = ApiClient.convertToType(data['OriginalSentenceText'], 'String');
      }
      if (data.hasOwnProperty('Rephrasings')) {
        obj['Rephrasings'] = ApiClient.convertToType(data['Rephrasings'], [RephrasedSentenceOption]);
      }
    }
    return obj;
  }

  /**
   * Index of the sentence, 1-based, ordered
   * @member {Number} SentenceIndex
   */
  exports.prototype['SentenceIndex'] = undefined;
  /**
   * Original input sentence text
   * @member {String} OriginalSentenceText
   */
  exports.prototype['OriginalSentenceText'] = undefined;
  /**
   * Rephrasing text options, candidates of the original input sentence, in order - with best candidate first
   * @member {Array.<module:model/RephrasedSentenceOption>} Rephrasings
   */
  exports.prototype['Rephrasings'] = undefined;



  return exports;
}));


