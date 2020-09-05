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
    root.CloudmersiveNlpApiClient.SimilarityAnalysisRequest = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SimilarityAnalysisRequest model module.
   * @module model/SimilarityAnalysisRequest
   * @version 2.1.1
   */

  /**
   * Constructs a new <code>SimilarityAnalysisRequest</code>.
   * Input to a similarity analysis operation
   * @alias module:model/SimilarityAnalysisRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SimilarityAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimilarityAnalysisRequest} obj Optional instance to populate.
   * @return {module:model/SimilarityAnalysisRequest} The populated <code>SimilarityAnalysisRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextToAnalyze1')) {
        obj['TextToAnalyze1'] = ApiClient.convertToType(data['TextToAnalyze1'], 'String');
      }
      if (data.hasOwnProperty('TextToAnalyze2')) {
        obj['TextToAnalyze2'] = ApiClient.convertToType(data['TextToAnalyze2'], 'String');
      }
    }
    return obj;
  }

  /**
   * First text to analyze
   * @member {String} TextToAnalyze1
   */
  exports.prototype['TextToAnalyze1'] = undefined;
  /**
   * Second text to analyze
   * @member {String} TextToAnalyze2
   */
  exports.prototype['TextToAnalyze2'] = undefined;



  return exports;
}));


