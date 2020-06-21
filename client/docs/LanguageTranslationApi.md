# CloudmersiveNlpApiClient.LanguageTranslationApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languageTranslationTranslateDeuToEng**](LanguageTranslationApi.md#languageTranslationTranslateDeuToEng) | **POST** /nlp-v2/translate/language/deu/to/eng | Translate German to English text with Deep Learning AI
[**languageTranslationTranslateEngToDeu**](LanguageTranslationApi.md#languageTranslationTranslateEngToDeu) | **POST** /nlp-v2/translate/language/eng/to/deu | Translate English to German text with Deep Learning AI
[**languageTranslationTranslateEngToFra**](LanguageTranslationApi.md#languageTranslationTranslateEngToFra) | **POST** /nlp-v2/translate/language/eng/to/fra | Translate English to French text with Deep Learning AI
[**languageTranslationTranslateEngToRus**](LanguageTranslationApi.md#languageTranslationTranslateEngToRus) | **POST** /nlp-v2/translate/language/eng/to/rus | Translate English to Russian text with Deep Learning AI
[**languageTranslationTranslateFraToEng**](LanguageTranslationApi.md#languageTranslationTranslateFraToEng) | **POST** /nlp-v2/translate/language/fra/to/eng | Translate French to English text with Deep Learning AI
[**languageTranslationTranslateRusToEng**](LanguageTranslationApi.md#languageTranslationTranslateRusToEng) | **POST** /nlp-v2/translate/language/rus/to/eng | Translate Russian to English text with Deep Learning AI


<a name="languageTranslationTranslateDeuToEng"></a>
# **languageTranslationTranslateDeuToEng**
> LanguageTranslationResponse languageTranslationTranslateDeuToEng(input)

Translate German to English text with Deep Learning AI

Automatically translates input text in German to output text in English using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateDeuToEng(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageTranslationTranslateEngToDeu"></a>
# **languageTranslationTranslateEngToDeu**
> LanguageTranslationResponse languageTranslationTranslateEngToDeu(input)

Translate English to German text with Deep Learning AI

Automatically translates input text in English to output text in German using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateEngToDeu(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageTranslationTranslateEngToFra"></a>
# **languageTranslationTranslateEngToFra**
> LanguageTranslationResponse languageTranslationTranslateEngToFra(input)

Translate English to French text with Deep Learning AI

Automatically translates input text in English to output text in French using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateEngToFra(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageTranslationTranslateEngToRus"></a>
# **languageTranslationTranslateEngToRus**
> LanguageTranslationResponse languageTranslationTranslateEngToRus(input)

Translate English to Russian text with Deep Learning AI

Automatically translates input text in English to output text in Russian using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateEngToRus(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageTranslationTranslateFraToEng"></a>
# **languageTranslationTranslateFraToEng**
> LanguageTranslationResponse languageTranslationTranslateFraToEng(input)

Translate French to English text with Deep Learning AI

Automatically translates input text in French to output text in English using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateFraToEng(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageTranslationTranslateRusToEng"></a>
# **languageTranslationTranslateRusToEng**
> LanguageTranslationResponse languageTranslationTranslateRusToEng(input)

Translate Russian to English text with Deep Learning AI

Automatically translates input text in Russian to output text in English using advanced Deep Learning and Neural NLP.  Consumes 1-2 API calls per input sentence.

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.LanguageTranslationApi();

var input = new CloudmersiveNlpApiClient.LanguageTranslationRequest(); // LanguageTranslationRequest | Input translation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageTranslationTranslateRusToEng(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageTranslationRequest**](LanguageTranslationRequest.md)| Input translation request | 

### Return type

[**LanguageTranslationResponse**](LanguageTranslationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

