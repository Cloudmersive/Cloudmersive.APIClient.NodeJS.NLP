# CloudmersiveNlpApiClient.SegmentationApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**segmentationGetSentences**](SegmentationApi.md#segmentationGetSentences) | **POST** /nlp-v2/segmentation/sentences | Extract sentences from string
[**segmentationGetWords**](SegmentationApi.md#segmentationGetWords) | **POST** /nlp-v2/segmentation/words | Get words in input string


<a name="segmentationGetSentences"></a>
# **segmentationGetSentences**
> SentenceSegmentationResponse segmentationGetSentences(input)

Extract sentences from string

Segment an input string into separate sentences, output result as a string.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.SegmentationApi();

var input = new CloudmersiveNlpApiClient.SentenceSegmentationRequest(); // SentenceSegmentationRequest | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentationGetSentences(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**SentenceSegmentationRequest**](SentenceSegmentationRequest.md)| Input string | 

### Return type

[**SentenceSegmentationResponse**](SentenceSegmentationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="segmentationGetWords"></a>
# **segmentationGetWords**
> GetWordsResponse segmentationGetWords(input)

Get words in input string

Get the component words in an input string

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.SegmentationApi();

var input = new CloudmersiveNlpApiClient.GetWordsRequest(); // GetWordsRequest | String to process


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentationGetWords(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**GetWordsRequest**](GetWordsRequest.md)| String to process | 

### Return type

[**GetWordsResponse**](GetWordsResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

