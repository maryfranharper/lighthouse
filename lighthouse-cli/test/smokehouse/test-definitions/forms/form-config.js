/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const experimentalConfig = require('../../../../../lighthouse-core/config/experimental-config.js');

/**
 * @type {LH.Config.Json}
 * Config file for running form gatherer  tests.
 */
const config = {
<<<<<<< HEAD
  extends: 'lighthouse:default',
=======
  ...experimentalConfig,
>>>>>>> 35f1a6f90e9443bdf42179a4c9823e6d4848a9e6
  settings: {
    onlyAudits: [
      'autocomplete',
    ],
  },
};

module.exports = config;
