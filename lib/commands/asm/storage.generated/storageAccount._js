/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

/*

Generated Command List:

azure account abort-migration 
--name $p0

azure account commit-migration 
--name $p0

azure account prepare-migration 
--name $p0


*/

'use strict';
var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;exports.init = function (cli) {

/*
  StorageAccount AbortMigration
  --name
*/
  var storageAccountAbortMigration = cli.category('storage').description('Commands to invoke service management operations.').category('account')
  .description($('Commands to manage your storage account.  '));
  storageAccountAbortMigration.command('abort-migration [name]')
  .description($('Abort storage account migration api validates and aborts the given storage account for IaaS Classic to ARM migration.'))
  .usage('[options] <name>')
  .option('-n, --name <name>', $('name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(name, options, _) {
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    var subscription = profile.current.getSubscription(options.subscription);
    var storageManagementClient = utils.createStorageClient(subscription);
    var result = storageManagementClient.storageAccounts.abortMigration(name, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  StorageAccount CommitMigration
  --name
*/
  var storageAccountCommitMigration = cli.category('storage').description('Commands to invoke service management operations.').category('account')
  .description($('Commands to manage your storage account.  '));
  storageAccountCommitMigration.command('commit-migration [name]')
  .description($('Commit storage account migration api validates and commits the given storage account for IaaS Classic to ARM migration.'))
  .usage('[options] <name>')
  .option('-n, --name <name>', $('name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(name, options, _) {
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    var subscription = profile.current.getSubscription(options.subscription);
    var storageManagementClient = utils.createStorageClient(subscription);
    var result = storageManagementClient.storageAccounts.commitMigration(name, _);
    if (result) {
      cli.output.json(result);
    }
  });
/*
  StorageAccount PrepareMigration
  --name
*/
  var storageAccountPrepareMigration = cli.category('storage').description('Commands to invoke service management operations.').category('account')
  .description($('Commands to manage your storage account.  '));
  storageAccountPrepareMigration.command('prepare-migration [name]')
  .description($('Prepare storage account migration api validates and prepares the given storage account for IaaS Classic to ARM migration.'))
  .usage('[options] <name>')
  .option('-n, --name <name>', $('name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(name, options, _) {
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    var subscription = profile.current.getSubscription(options.subscription);
    var storageManagementClient = utils.createStorageClient(subscription);
    var result = storageManagementClient.storageAccounts.prepareMigration(name, _);
    if (result) {
      cli.output.json(result);
    }
  });


};