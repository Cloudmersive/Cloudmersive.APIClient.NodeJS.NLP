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
    define(['ApiClient', 'model/LanguageTranslationRequest', 'model/LanguageTranslationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LanguageTranslationRequest'), require('../model/LanguageTranslationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.LanguageTranslationApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.LanguageTranslationRequest, root.CloudmersiveNlpApiClient.LanguageTranslationResponse);
  }
}(this, function(ApiClient, LanguageTranslationRequest, LanguageTranslationResponse) {
  'use strict';

  /**
   * LanguageTranslation service.
   * @module api/LanguageTranslationApi
   * @version 2.0.8
   */

  /**
   * Constructs a new LanguageTranslationApi. 
   * @alias module:api/LanguageTranslationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the languageTranslationTranslateDeuToEng operation.
     * @callback module:api/LanguageTranslationApi~languageTranslationTranslateDeuToEngCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageTranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate German to English text with Deep Learning AI
     * Automatically translates input text in German to output text in English using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.
     * @param {module:model/LanguageTranslationRequest} input Input translation request
     * @param {module:api/LanguageTranslationApi~languageTranslationTranslateDeuToEngCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageTranslationResponse}
     */
    this.languageTranslationTranslateDeuToEng = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling languageTranslationTranslateDeuToEng");
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
      var returnType = LanguageTranslationResponse;

      return this.apiClient.callApi(
        '/nlp-v2/translate/language/deu/to/eng', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the languageTranslationTranslateEngToDeu operation.
     * @callback module:api/LanguageTranslationApi~languageTranslationTranslateEngToDeuCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageTranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate English to German text with Deep Learning AI
     * Automatically translates input text in English to output text in German using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.
     * @param {module:model/LanguageTranslationRequest} input Input translation request
     * @param {module:api/LanguageTranslationApi~languageTranslationTranslateEngToDeuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageTranslationResponse}
     */
    this.languageTranslationTranslateEngToDeu = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling languageTranslationTranslateEngToDeu");
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
      var returnType = LanguageTranslationResponse;

      return this.apiClient.callApi(
        '/nlp-v2/translate/language/eng/to/deu', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the languageTranslationTranslateEngToRus operation.
     * @callback module:api/LanguageTranslationApi~languageTranslationTranslateEngToRusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageTranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate English to Russian text with Deep Learning AI
     * Automatically translates input text in English to output text in Russian using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.
     * @param {module:model/LanguageTranslationRequest} input Input translation request
     * @param {module:api/LanguageTranslationApi~languageTranslationTranslateEngToRusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageTranslationResponse}
     */
    this.languageTranslationTranslateEngToRus = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling languageTranslationTranslateEngToRus");
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
      var returnType = LanguageTranslationResponse;

      return this.apiClient.callApi(
        '/nlp-v2/translate/language/eng/to/rus', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the languageTranslationTranslateRusToEng operation.
     * @callback module:api/LanguageTranslationApi~languageTranslationTranslateRusToEngCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguageTranslationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate Russian to English text with Deep Learning AI
     * Automatically translates input text in Russian to output text in English using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.
     * @param {module:model/LanguageTranslationRequest} input Input translation request
     * @param {module:api/LanguageTranslationApi~languageTranslationTranslateRusToEngCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguageTranslationResponse}
     */
    this.languageTranslationTranslateRusToEng = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling languageTranslationTranslateRusToEng");
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
      var returnType = LanguageTranslationResponse;

      return this.apiClient.callApi(
        '/nlp-v2/translate/language/rus/to/eng', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
