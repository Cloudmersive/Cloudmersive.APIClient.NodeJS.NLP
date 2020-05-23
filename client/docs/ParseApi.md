# CloudmersiveNlpApiClient.ParseApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**parseParseString**](ParseApi.md#parseParseString) | **POST** /nlp-v2/parse/tree | Parse string to syntax tree


<a name="parseParseString"></a>
# **parseParseString**
> ParseResponse parseParseString(input)

Parse string to syntax tree

Parses the input string into a Penn Treebank syntax tree

### Example
```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveNlpApiClient.ParseApi();

var input = new CloudmersiveNlpApiClient.ParseRequest(); // ParseRequest | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseParseString(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**ParseRequest**](ParseRequest.md)| Input string | 

### Return type

[**ParseResponse**](ParseResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json

