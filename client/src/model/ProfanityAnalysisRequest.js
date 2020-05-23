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
    root.CloudmersiveNlpApiClient.ProfanityAnalysisRequest = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProfanityAnalysisRequest model module.
   * @module model/ProfanityAnalysisRequest
   * @version 2.0.8
   */

  /**
   * Constructs a new <code>ProfanityAnalysisRequest</code>.
   * Input to a profanity analysis operation
   * @alias module:model/ProfanityAnalysisRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProfanityAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfanityAnalysisRequest} obj Optional instance to populate.
   * @return {module:model/ProfanityAnalysisRequest} The populated <code>ProfanityAnalysisRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextToAnalyze')) {
        obj['TextToAnalyze'] = ApiClient.convertToType(data['TextToAnalyze'], 'String');
      }
    }
    return obj;
  }

  /**
   * Text to analyze
   * @member {String} TextToAnalyze
   */
  exports.prototype['TextToAnalyze'] = undefined;



  return exports;
}));


