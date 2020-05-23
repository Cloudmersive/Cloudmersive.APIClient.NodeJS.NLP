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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveNlpApiClient);
  }
}(this, function(expect, CloudmersiveNlpApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveNlpApiClient.SimilarityAnalysisRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SimilarityAnalysisRequest', function() {
    it('should create an instance of SimilarityAnalysisRequest', function() {
      // uncomment below and update the code to test SimilarityAnalysisRequest
      //var instane = new CloudmersiveNlpApiClient.SimilarityAnalysisRequest();
      //expect(instance).to.be.a(CloudmersiveNlpApiClient.SimilarityAnalysisRequest);
    });

    it('should have the property textToAnalyze1 (base name: "TextToAnalyze1")', function() {
      // uncomment below and update the code to test the property textToAnalyze1
      //var instane = new CloudmersiveNlpApiClient.SimilarityAnalysisRequest();
      //expect(instance).to.be();
    });

    it('should have the property textToAnalyze2 (base name: "TextToAnalyze2")', function() {
      // uncomment below and update the code to test the property textToAnalyze2
      //var instane = new CloudmersiveNlpApiClient.SimilarityAnalysisRequest();
      //expect(instance).to.be();
    });

  });

}));
