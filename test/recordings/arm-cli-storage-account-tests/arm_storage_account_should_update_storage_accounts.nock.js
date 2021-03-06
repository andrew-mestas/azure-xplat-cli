// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistorageGroup8821/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5027?api-version=2016-01-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistoragegroup8821/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5027\",\"kind\":\"Storage\",\"location\":\"westeurope\",\"name\":\"armclistorageaccount5027\",\"properties\":{\"creationTime\":\"2016-09-01T10:54:43.7935824Z\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount5027.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount5027.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount5027.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount5027.table.core.windows.net/\"},\"primaryLocation\":\"westeurope\",\"provisioningState\":\"Succeeded\",\"secondaryEndpoints\":{\"blob\":\"https://armclistorageaccount5027-secondary.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount5027-secondary.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount5027-secondary.table.core.windows.net/\"},\"secondaryLocation\":\"northeurope\",\"statusOfPrimary\":\"available\",\"statusOfSecondary\":\"available\"},\"sku\":{\"name\":\"Standard_RAGRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1103',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6e4de45e-dd9e-4ad2-b44a-89a37a8af770',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6e4de45e-dd9e-4ad2-b44a-89a37a8af770',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105553Z:6e4de45e-dd9e-4ad2-b44a-89a37a8af770',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:55:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistorageGroup8821/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5027?api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistoragegroup8821/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5027\",\"kind\":\"Storage\",\"location\":\"westeurope\",\"name\":\"armclistorageaccount5027\",\"properties\":{\"creationTime\":\"2016-09-01T10:54:43.7935824Z\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount5027.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount5027.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount5027.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount5027.table.core.windows.net/\"},\"primaryLocation\":\"westeurope\",\"provisioningState\":\"Succeeded\",\"secondaryEndpoints\":{\"blob\":\"https://armclistorageaccount5027-secondary.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount5027-secondary.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount5027-secondary.table.core.windows.net/\"},\"secondaryLocation\":\"northeurope\",\"statusOfPrimary\":\"available\",\"statusOfSecondary\":\"available\"},\"sku\":{\"name\":\"Standard_RAGRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1103',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '68f76233-a45e-4ca2-b887-01a92cf02764',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '68f76233-a45e-4ca2-b887-01a92cf02764',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105554Z:68f76233-a45e-4ca2-b887-01a92cf02764',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:55:53 GMT' });
 return result; }]];