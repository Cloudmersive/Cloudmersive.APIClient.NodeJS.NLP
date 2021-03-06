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
    instance = new CloudmersiveNlpApiClient.AnalyticsApi();
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

  describe('AnalyticsApi', function() {
    describe('analyticsHateSpeech', function() {
      it('should call analyticsHateSpeech successfully', function(done) {
        //uncomment below and update the code to test analyticsHateSpeech
        //instance.analyticsHateSpeech(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analyticsProfanity', function() {
      it('should call analyticsProfanity successfully', function(done) {
        //uncomment below and update the code to test analyticsProfanity
        //instance.analyticsProfanity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analyticsSentiment', function() {
      it('should call analyticsSentiment successfully', function(done) {
        //uncomment below and update the code to test analyticsSentiment
        //instance.analyticsSentiment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analyticsSimilarity', function() {
      it('should call analyticsSimilarity successfully', function(done) {
        //uncomment below and update the code to test analyticsSimilarity
        //instance.analyticsSimilarity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analyticsSubjectivity', function() {
      it('should call analyticsSubjectivity successfully', function(done) {
        //uncomment below and update the code to test analyticsSubjectivity
        //instance.analyticsSubjectivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
