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
    define(['ApiClient', 'model/LanguageDetectionRequest', 'model/LanguageDetectionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LanguageDetectionRequest'), require('../model/LanguageDetectionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.LanguageDetectionApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.LanguageDetectionRequest, root.CloudmersiveNlpApiClient.LanguageDetectionResponse);
  }
}(this, function(ApiClient, LanguageDetectionRequest, LanguageDetectionResponse) {
  'use strict';

  /**
   * LanguageDetection service.
   * @module api/LanguageDetectionApi
   * @version 2.1.1
   */

  /**
   * Constructs a new LanguageDetectionApi. 
   * @alias module:api/LanguageDetectionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the languageDetectionGetLanguage operation.
     * @callback module:api/LanguageDetectionApi~languageDetectionGetLanguageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageDetectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect language of text
     * Automatically determine which language a text string is written in.  Supports Danish (DAN), German (DEU), English (ENG), French (FRA), Italian (ITA), Japanese (JPN), Korean (KOR), Dutch (NLD), Norwegian (NOR), Portuguese (POR), Russian (RUS), Spanish (SPA), Swedish (SWE), Chinese (ZHO).
     * @param {module:model/LanguageDetectionRequest} input 
     * @param {module:api/LanguageDetectionApi~languageDetectionGetLanguageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageDetectionResponse}
     */
    this.languageDetectionGetLanguage = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling languageDetectionGetLanguage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = LanguageDetectionResponse;

      return this.apiClient.callApi(
        '/nlp-v2/language/detect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
