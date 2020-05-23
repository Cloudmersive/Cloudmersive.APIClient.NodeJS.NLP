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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.ProfanityAnalysisResponse = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProfanityAnalysisResponse model module.
   * @module model/ProfanityAnalysisResponse
   * @version 2.0.8
   */

  /**
   * Constructs a new <code>ProfanityAnalysisResponse</code>.
   * Output of a profanity analysis operation
   * @alias module:model/ProfanityAnalysisResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ProfanityAnalysisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfanityAnalysisResponse} obj Optional instance to populate.
   * @return {module:model/ProfanityAnalysisResponse} The populated <code>ProfanityAnalysisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ProfanityScoreResult')) {
        obj['ProfanityScoreResult'] = ApiClient.convertToType(data['ProfanityScoreResult'], 'Number');
      }
      if (data.hasOwnProperty('SentenceCount')) {
        obj['SentenceCount'] = ApiClient.convertToType(data['SentenceCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the profanity detection operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Profanity classification score between 0.0 and 1.0 where scores closer to zero have a low probability of being profane or contain obscene language, while scores close to 1.0 have a high probability of being profane or containing obscene language.  Values above 0.8 have a very high probability of being profane.
   * @member {Number} ProfanityScoreResult
   */
  exports.prototype['ProfanityScoreResult'] = undefined;
  /**
   * Number of sentences in input text
   * @member {Number} SentenceCount
   */
  exports.prototype['SentenceCount'] = undefined;



  return exports;
}));


