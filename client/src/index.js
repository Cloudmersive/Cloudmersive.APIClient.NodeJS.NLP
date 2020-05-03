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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CheckSentenceRequest', 'model/CheckSentenceResponse', 'model/CheckWordRequest', 'model/CheckWordResponse', 'model/CorrectWordInSentence', 'model/Entity', 'model/ExtractEntitiesRequest', 'model/ExtractEntitiesResponse', 'model/GetWordsRequest', 'model/GetWordsResponse', 'model/LanguageDetectionRequest', 'model/LanguageDetectionResponse', 'model/LanguageTranslationRequest', 'model/LanguageTranslationResponse', 'model/ParseRequest', 'model/ParseResponse', 'model/PosRequest', 'model/PosResponse', 'model/PosSentence', 'model/PosTaggedWord', 'model/RephraseRequest', 'model/RephraseResponse', 'model/RephrasedSentence', 'model/RephrasedSentenceOption', 'model/SentenceSegmentationRequest', 'model/SentenceSegmentationResponse', 'model/SentimentAnalysisRequest', 'model/SentimentAnalysisResponse', 'model/WordPosition', 'api/AnalyticsApi', 'api/ExtractEntitiesApi', 'api/LanguageDetectionApi', 'api/LanguageTranslationApi', 'api/ParseApi', 'api/PosTaggerApi', 'api/RephraseApi', 'api/SegmentationApi', 'api/SpellcheckApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CheckSentenceRequest'), require('./model/CheckSentenceResponse'), require('./model/CheckWordRequest'), require('./model/CheckWordResponse'), require('./model/CorrectWordInSentence'), require('./model/Entity'), require('./model/ExtractEntitiesRequest'), require('./model/ExtractEntitiesResponse'), require('./model/GetWordsRequest'), require('./model/GetWordsResponse'), require('./model/LanguageDetectionRequest'), require('./model/LanguageDetectionResponse'), require('./model/LanguageTranslationRequest'), require('./model/LanguageTranslationResponse'), require('./model/ParseRequest'), require('./model/ParseResponse'), require('./model/PosRequest'), require('./model/PosResponse'), require('./model/PosSentence'), require('./model/PosTaggedWord'), require('./model/RephraseRequest'), require('./model/RephraseResponse'), require('./model/RephrasedSentence'), require('./model/RephrasedSentenceOption'), require('./model/SentenceSegmentationRequest'), require('./model/SentenceSegmentationResponse'), require('./model/SentimentAnalysisRequest'), require('./model/SentimentAnalysisResponse'), require('./model/WordPosition'), require('./api/AnalyticsApi'), require('./api/ExtractEntitiesApi'), require('./api/LanguageDetectionApi'), require('./api/LanguageTranslationApi'), require('./api/ParseApi'), require('./api/PosTaggerApi'), require('./api/RephraseApi'), require('./api/SegmentationApi'), require('./api/SpellcheckApi'));
  }
}(function(ApiClient, CheckSentenceRequest, CheckSentenceResponse, CheckWordRequest, CheckWordResponse, CorrectWordInSentence, Entity, ExtractEntitiesRequest, ExtractEntitiesResponse, GetWordsRequest, GetWordsResponse, LanguageDetectionRequest, LanguageDetectionResponse, LanguageTranslationRequest, LanguageTranslationResponse, ParseRequest, ParseResponse, PosRequest, PosResponse, PosSentence, PosTaggedWord, RephraseRequest, RephraseResponse, RephrasedSentence, RephrasedSentenceOption, SentenceSegmentationRequest, SentenceSegmentationResponse, SentimentAnalysisRequest, SentimentAnalysisResponse, WordPosition, AnalyticsApi, ExtractEntitiesApi, LanguageDetectionApi, LanguageTranslationApi, ParseApi, PosTaggerApi, RephraseApi, SegmentationApi, SpellcheckApi) {
  'use strict';

  /**
   * The_powerful_Natural_Language_Processing_APIs__v2_let_you_perform_part_of_speech_tagging_entity_identification_sentence_parsing_and_much_more_to_help_you_understand_the_meaning_of_unstructured_text_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveNlpApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveNlpApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveNlpApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveNlpApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveNlpApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CheckSentenceRequest model constructor.
     * @property {module:model/CheckSentenceRequest}
     */
    CheckSentenceRequest: CheckSentenceRequest,
    /**
     * The CheckSentenceResponse model constructor.
     * @property {module:model/CheckSentenceResponse}
     */
    CheckSentenceResponse: CheckSentenceResponse,
    /**
     * The CheckWordRequest model constructor.
     * @property {module:model/CheckWordRequest}
     */
    CheckWordRequest: CheckWordRequest,
    /**
     * The CheckWordResponse model constructor.
     * @property {module:model/CheckWordResponse}
     */
    CheckWordResponse: CheckWordResponse,
    /**
     * The CorrectWordInSentence model constructor.
     * @property {module:model/CorrectWordInSentence}
     */
    CorrectWordInSentence: CorrectWordInSentence,
    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity: Entity,
    /**
     * The ExtractEntitiesRequest model constructor.
     * @property {module:model/ExtractEntitiesRequest}
     */
    ExtractEntitiesRequest: ExtractEntitiesRequest,
    /**
     * The ExtractEntitiesResponse model constructor.
     * @property {module:model/ExtractEntitiesResponse}
     */
    ExtractEntitiesResponse: ExtractEntitiesResponse,
    /**
     * The GetWordsRequest model constructor.
     * @property {module:model/GetWordsRequest}
     */
    GetWordsRequest: GetWordsRequest,
    /**
     * The GetWordsResponse model constructor.
     * @property {module:model/GetWordsResponse}
     */
    GetWordsResponse: GetWordsResponse,
    /**
     * The LanguageDetectionRequest model constructor.
     * @property {module:model/LanguageDetectionRequest}
     */
    LanguageDetectionRequest: LanguageDetectionRequest,
    /**
     * The LanguageDetectionResponse model constructor.
     * @property {module:model/LanguageDetectionResponse}
     */
    LanguageDetectionResponse: LanguageDetectionResponse,
    /**
     * The LanguageTranslationRequest model constructor.
     * @property {module:model/LanguageTranslationRequest}
     */
    LanguageTranslationRequest: LanguageTranslationRequest,
    /**
     * The LanguageTranslationResponse model constructor.
     * @property {module:model/LanguageTranslationResponse}
     */
    LanguageTranslationResponse: LanguageTranslationResponse,
    /**
     * The ParseRequest model constructor.
     * @property {module:model/ParseRequest}
     */
    ParseRequest: ParseRequest,
    /**
     * The ParseResponse model constructor.
     * @property {module:model/ParseResponse}
     */
    ParseResponse: ParseResponse,
    /**
     * The PosRequest model constructor.
     * @property {module:model/PosRequest}
     */
    PosRequest: PosRequest,
    /**
     * The PosResponse model constructor.
     * @property {module:model/PosResponse}
     */
    PosResponse: PosResponse,
    /**
     * The PosSentence model constructor.
     * @property {module:model/PosSentence}
     */
    PosSentence: PosSentence,
    /**
     * The PosTaggedWord model constructor.
     * @property {module:model/PosTaggedWord}
     */
    PosTaggedWord: PosTaggedWord,
    /**
     * The RephraseRequest model constructor.
     * @property {module:model/RephraseRequest}
     */
    RephraseRequest: RephraseRequest,
    /**
     * The RephraseResponse model constructor.
     * @property {module:model/RephraseResponse}
     */
    RephraseResponse: RephraseResponse,
    /**
     * The RephrasedSentence model constructor.
     * @property {module:model/RephrasedSentence}
     */
    RephrasedSentence: RephrasedSentence,
    /**
     * The RephrasedSentenceOption model constructor.
     * @property {module:model/RephrasedSentenceOption}
     */
    RephrasedSentenceOption: RephrasedSentenceOption,
    /**
     * The SentenceSegmentationRequest model constructor.
     * @property {module:model/SentenceSegmentationRequest}
     */
    SentenceSegmentationRequest: SentenceSegmentationRequest,
    /**
     * The SentenceSegmentationResponse model constructor.
     * @property {module:model/SentenceSegmentationResponse}
     */
    SentenceSegmentationResponse: SentenceSegmentationResponse,
    /**
     * The SentimentAnalysisRequest model constructor.
     * @property {module:model/SentimentAnalysisRequest}
     */
    SentimentAnalysisRequest: SentimentAnalysisRequest,
    /**
     * The SentimentAnalysisResponse model constructor.
     * @property {module:model/SentimentAnalysisResponse}
     */
    SentimentAnalysisResponse: SentimentAnalysisResponse,
    /**
     * The WordPosition model constructor.
     * @property {module:model/WordPosition}
     */
    WordPosition: WordPosition,
    /**
     * The AnalyticsApi service constructor.
     * @property {module:api/AnalyticsApi}
     */
    AnalyticsApi: AnalyticsApi,
    /**
     * The ExtractEntitiesApi service constructor.
     * @property {module:api/ExtractEntitiesApi}
     */
    ExtractEntitiesApi: ExtractEntitiesApi,
    /**
     * The LanguageDetectionApi service constructor.
     * @property {module:api/LanguageDetectionApi}
     */
    LanguageDetectionApi: LanguageDetectionApi,
    /**
     * The LanguageTranslationApi service constructor.
     * @property {module:api/LanguageTranslationApi}
     */
    LanguageTranslationApi: LanguageTranslationApi,
    /**
     * The ParseApi service constructor.
     * @property {module:api/ParseApi}
     */
    ParseApi: ParseApi,
    /**
     * The PosTaggerApi service constructor.
     * @property {module:api/PosTaggerApi}
     */
    PosTaggerApi: PosTaggerApi,
    /**
     * The RephraseApi service constructor.
     * @property {module:api/RephraseApi}
     */
    RephraseApi: RephraseApi,
    /**
     * The SegmentationApi service constructor.
     * @property {module:api/SegmentationApi}
     */
    SegmentationApi: SegmentationApi,
    /**
     * The SpellcheckApi service constructor.
     * @property {module:api/SpellcheckApi}
     */
    SpellcheckApi: SpellcheckApi
  };

  return exports;
}));
