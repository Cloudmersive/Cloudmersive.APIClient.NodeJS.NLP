# CloudmersiveNlpApiClient.AnalyticsApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsHateSpeech**](AnalyticsApi.md#analyticsHateSpeech) | **POST** /nlp-v2/analytics/hate-speech | Perform Hate Speech Analysis and Detection on Text
[**analyticsProfanity**](AnalyticsApi.md#analyticsProfanity) | **POST** /nlp-v2/analytics/profanity | Perform Profanity and Obscene Language Analysis and Detection on Text
[**analyticsSentiment**](AnalyticsApi.md#analyticsSentiment) | **POST** /nlp-v2/analytics/sentiment | Perform Sentiment Analysis and Classification on Text
[**analyticsSimilarity**](AnalyticsApi.md#analyticsSimilarity) | **POST** /nlp-v2/analytics/similarity | Perform Semantic Similarity Comparison of Two Strings
[**analyticsSubjectivity**](AnalyticsApi.md#analyticsSubjectivity) | **POST** /nlp-v2/analytics/subjectivity | Perform Subjectivity and Objectivity Analysis on Text


<a name="analyticsHateSpeech"></a>
# **analyticsHateSpeech**
> HateSpeechAnalysisResponse analyticsHateSpeech(input)

Perform Hate Speech Analysis and Detection on Text

Analyze input text using advanced Hate Speech Analysis to determine if the input contains hate speech language.  Supports English language input.  Consumes 1-2 API calls per sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.AnalyticsApi();

var input = new CloudmersiveNlpApiClient.HateSpeechAnalysisRequest(); // HateSpeechAnalysisRequest | Input hate speech analysis request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsHateSpeech(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**HateSpeechAnalysisRequest**](HateSpeechAnalysisRequest.md)| Input hate speech analysis request | 

### Return type

[**HateSpeechAnalysisResponse**](HateSpeechAnalysisResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="analyticsProfanity"></a>
# **analyticsProfanity**
> ProfanityAnalysisResponse analyticsProfanity(input)

Perform Profanity and Obscene Language Analysis and Detection on Text

Analyze input text using advanced Profanity and Obscene Language Analysis to determine if the input contains profane language.  Supports English language input.  Consumes 1-2 API calls per sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.AnalyticsApi();

var input = new CloudmersiveNlpApiClient.ProfanityAnalysisRequest(); // ProfanityAnalysisRequest | Input profanity analysis request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsProfanity(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**ProfanityAnalysisRequest**](ProfanityAnalysisRequest.md)| Input profanity analysis request | 

### Return type

[**ProfanityAnalysisResponse**](ProfanityAnalysisResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="analyticsSentiment"></a>
# **analyticsSentiment**
> SentimentAnalysisResponse analyticsSentiment(input)

Perform Sentiment Analysis and Classification on Text

Analyze input text using advanced Sentiment Analysis to determine if the input is positive, negative, or neutral.  Supports English language input.  Consumes 1-2 API calls per sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.AnalyticsApi();

var input = new CloudmersiveNlpApiClient.SentimentAnalysisRequest(); // SentimentAnalysisRequest | Input sentiment analysis request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsSentiment(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**SentimentAnalysisRequest**](SentimentAnalysisRequest.md)| Input sentiment analysis request | 

### Return type

[**SentimentAnalysisResponse**](SentimentAnalysisResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="analyticsSimilarity"></a>
# **analyticsSimilarity**
> SimilarityAnalysisResponse analyticsSimilarity(input)

Perform Semantic Similarity Comparison of Two Strings

Analyze two input text strings, typically sentences, and determine the semantic similarity of each.  Semantic similarity refers to the degree to which two sentences mean the same thing semantically.  Uses advanced Deep Learning to perform the semantic similarity comparison.  Consumes 1-2 API calls per sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.AnalyticsApi();

var input = new CloudmersiveNlpApiClient.SimilarityAnalysisRequest(); // SimilarityAnalysisRequest | Input similarity analysis request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsSimilarity(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**SimilarityAnalysisRequest**](SimilarityAnalysisRequest.md)| Input similarity analysis request | 

### Return type

[**SimilarityAnalysisResponse**](SimilarityAnalysisResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="analyticsSubjectivity"></a>
# **analyticsSubjectivity**
> SubjectivityAnalysisResponse analyticsSubjectivity(input)

Perform Subjectivity and Objectivity Analysis on Text

Analyze input text using advanced Subjectivity and Objectivity Language Analysis to determine if the input text is objective or subjective, and how much.  Supports English language input.  Consumes 1-2 API calls per sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.AnalyticsApi();

var input = new CloudmersiveNlpApiClient.SubjectivityAnalysisRequest(); // SubjectivityAnalysisRequest | Input subjectivity analysis request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsSubjectivity(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**SubjectivityAnalysisRequest**](SubjectivityAnalysisRequest.md)| Input subjectivity analysis request | 

### Return type

[**SubjectivityAnalysisResponse**](SubjectivityAnalysisResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

