// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource3033' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '34752edd-fb8b-4335-8f12-289cd78bfc76',
  'x-ms-correlation-request-id': '34752edd-fb8b-4335-8f12-289cd78bfc76',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233843Z:34752edd-fb8b-4335-8f12-289cd78bfc76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:42 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource3033' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '34752edd-fb8b-4335-8f12-289cd78bfc76',
  'x-ms-correlation-request-id': '34752edd-fb8b-4335-8f12-289cd78bfc76',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233843Z:34752edd-fb8b-4335-8f12-289cd78bfc76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:42 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033\",\"name\":\"xTestResource3033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'x-ms-correlation-request-id': '25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233844Z:25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033\",\"name\":\"xTestResource3033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'x-ms-correlation-request-id': '25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233844Z:25f020f9-ffa2-4d86-9ff9-f87a349fd976',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033\",\"name\":\"xTestResource3033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'x-ms-correlation-request-id': '53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233845Z:53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:44 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033\",\"name\":\"xTestResource3033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'x-ms-correlation-request-id': '53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233845Z:53f00ea0-41d2-4bf3-b595-bc6dcf70d253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:44 GMT',
  connection: 'close',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112\",\"name\":\"xTestGrpRes3112\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3112\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3112.azurewebsites.net\"],\"webSpace\":\"xTestResource3033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource3033-SouthCentralUSwebspace/sites/xTestGrpRes3112\",\"repositorySiteName\":\"xTestGrpRes3112\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3112.azurewebsites.net\",\"xtestgrpres3112.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3112.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3112.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:38:48.607\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3112\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource3033\",\"defaultHostName\":\"xtestgrpres3112.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2342',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '59a7a3b0-80e2-4a52-b70e-8ed2c5636e20',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '35b413c3-f4bd-472a-91ec-810b3ab25541',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233853Z:35b413c3-f4bd-472a-91ec-810b3ab25541',
  date: 'Tue, 30 Aug 2016 23:38:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112\",\"name\":\"xTestGrpRes3112\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3112\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3112.azurewebsites.net\"],\"webSpace\":\"xTestResource3033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource3033-SouthCentralUSwebspace/sites/xTestGrpRes3112\",\"repositorySiteName\":\"xTestGrpRes3112\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3112.azurewebsites.net\",\"xtestgrpres3112.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3112.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3112.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:38:48.607\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3112\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource3033\",\"defaultHostName\":\"xtestgrpres3112.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2342',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '59a7a3b0-80e2-4a52-b70e-8ed2c5636e20',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '35b413c3-f4bd-472a-91ec-810b3ab25541',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233853Z:35b413c3-f4bd-472a-91ec-810b3ab25541',
  date: 'Tue, 30 Aug 2016 23:38:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112\",\"name\":\"xTestGrpRes3112\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3112\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3112.azurewebsites.net\"],\"webSpace\":\"xTestResource3033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource3033-SouthCentralUSwebspace/sites/xTestGrpRes3112\",\"repositorySiteName\":\"xTestGrpRes3112\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3112.azurewebsites.net\",\"xtestgrpres3112.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3112.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3112.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:38:48.693\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3112\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource3033\",\"defaultHostName\":\"xtestgrpres3112.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2344',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20317A81F7250"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f937be83-7a8a-4a92-8286-2a36d2c0a6e6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6a17d75d-b8fa-4f17-86ec-6edd141c49a2',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233854Z:6a17d75d-b8fa-4f17-86ec-6edd141c49a2',
  date: 'Tue, 30 Aug 2016 23:38:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource3033/providers/Microsoft.Web/sites/xTestGrpRes3112\",\"name\":\"xTestGrpRes3112\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3112\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3112.azurewebsites.net\"],\"webSpace\":\"xTestResource3033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-039.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource3033-SouthCentralUSwebspace/sites/xTestGrpRes3112\",\"repositorySiteName\":\"xTestGrpRes3112\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3112.azurewebsites.net\",\"xtestgrpres3112.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3112.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3112.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-30T23:38:48.693\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3112\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.210.153.161,104.210.152.152,104.210.159.82,104.210.154.205\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-039\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource3033\",\"defaultHostName\":\"xtestgrpres3112.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2344',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20317A81F7250"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f937be83-7a8a-4a92-8286-2a36d2c0a6e6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6a17d75d-b8fa-4f17-86ec-6edd141c49a2',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233854Z:6a17d75d-b8fa-4f17-86ec-6edd141c49a2',
  date: 'Tue, 30 Aug 2016 23:38:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web//sites/xTestGrpRes3112/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3c6c5ea-2152-4ed8-9e24-a7b357ca3f57',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e5795f51-d50e-4f0d-81ba-a5ff4cd9a6c9',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233854Z:e5795f51-d50e-4f0d-81ba-a5ff4cd9a6c9',
  date: 'Tue, 30 Aug 2016 23:38:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033/providers/Microsoft.Web//sites/xTestGrpRes3112/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3c6c5ea-2152-4ed8-9e24-a7b357ca3f57',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e5795f51-d50e-4f0d-81ba-a5ff4cd9a6c9',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233854Z:e5795f51-d50e-4f0d-81ba-a5ff4cd9a6c9',
  date: 'Tue, 30 Aug 2016 23:38:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'ea89bd45-9663-4c92-b820-de859c803662',
  'x-ms-correlation-request-id': 'ea89bd45-9663-4c92-b820-de859c803662',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233856Z:ea89bd45-9663-4c92-b820-de859c803662',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource3033?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'ea89bd45-9663-4c92-b820-de859c803662',
  'x-ms-correlation-request-id': 'ea89bd45-9663-4c92-b820-de859c803662',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233856Z:ea89bd45-9663-4c92-b820-de859c803662',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:38:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'e482feea-9eb7-47d6-be91-0f9da1f673de',
  'x-ms-correlation-request-id': 'e482feea-9eb7-47d6-be91-0f9da1f673de',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233926Z:e482feea-9eb7-47d6-be91-0f9da1f673de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:39:26 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'e482feea-9eb7-47d6-be91-0f9da1f673de',
  'x-ms-correlation-request-id': 'e482feea-9eb7-47d6-be91-0f9da1f673de',
  'x-ms-routing-request-id': 'CENTRALUS:20160830T233926Z:e482feea-9eb7-47d6-be91-0f9da1f673de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:39:26 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'x-ms-correlation-request-id': '67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233956Z:67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:39:56 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'x-ms-correlation-request-id': '67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'x-ms-routing-request-id': 'WESTUS2:20160830T233956Z:67bc9e7c-f4ed-4272-b4b3-4aba209e8c9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:39:56 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'x-ms-correlation-request-id': 'b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'x-ms-routing-request-id': 'WESTUS2:20160830T234027Z:b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:40:26 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'x-ms-correlation-request-id': 'b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'x-ms-routing-request-id': 'WESTUS2:20160830T234027Z:b595dd16-a953-41b1-8cd6-291c70b0b8b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:40:26 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '1d4f1b73-e005-425b-b31c-6e531a570efb',
  'x-ms-correlation-request-id': '1d4f1b73-e005-425b-b31c-6e531a570efb',
  'x-ms-routing-request-id': 'WESTUS2:20160830T234057Z:1d4f1b73-e005-425b-b31c-6e531a570efb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:40:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMzAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '1d4f1b73-e005-425b-b31c-6e531a570efb',
  'x-ms-correlation-request-id': '1d4f1b73-e005-425b-b31c-6e531a570efb',
  'x-ms-routing-request-id': 'WESTUS2:20160830T234057Z:1d4f1b73-e005-425b-b31c-6e531a570efb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 30 Aug 2016 23:40:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource3033','xTestGrpRes3112'];};