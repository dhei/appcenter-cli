/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple Test Flight Groups Response Type
 *
 */
class AppleTestFlightGroupsResponse {
  /**
   * Create a AppleTestFlightGroupsResponse.
   * @property {string} [id] id of the group.
   * @property {number} [providerId] provider id of the group.
   * @property {number} [appleId] apple id of the group.
   * @property {string} [name] name of the group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleTestFlightGroupsResponse
   *
   * @returns {object} metadata of AppleTestFlightGroupsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleTestFlightGroupsResponse',
      type: {
        name: 'Composite',
        className: 'AppleTestFlightGroupsResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          providerId: {
            required: false,
            serializedName: 'providerId',
            type: {
              name: 'Number'
            }
          },
          appleId: {
            required: false,
            serializedName: 'appleId',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleTestFlightGroupsResponse;
