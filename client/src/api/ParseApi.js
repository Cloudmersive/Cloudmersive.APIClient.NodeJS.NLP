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
    define(['ApiClient', 'model/ParseRequest', 'model/ParseResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParseRequest'), require('../model/ParseResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.ParseApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.ParseRequest, root.CloudmersiveNlpApiClient.ParseResponse);
  }
}(this, function(ApiClient, ParseRequest, ParseResponse) {
  'use strict';

  /**
   * Parse service.
   * @module api/ParseApi
   * @version 2.0.9
   */

  /**
   * Constructs a new ParseApi. 
   * @alias module:api/ParseApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the parseParseString operation.
     * @callback module:api/ParseApi~parseParseStringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse string to syntax tree
     * Parses the input string into a Penn Treebank syntax tree
     * @param {module:model/ParseRequest} input Input string
     * @param {module:api/ParseApi~parseParseStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParseResponse}
     */
    this.parseParseString = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling parseParseString");
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
      var returnType = ParseResponse;

      return this.apiClient.callApi(
        '/nlp-v2/parse/tree', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
