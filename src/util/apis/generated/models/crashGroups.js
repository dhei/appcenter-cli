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
 * Class representing a CrashGroups.
 */
class CrashGroups {
  /**
   * Create a CrashGroups.
   * @property {array} crashGroups
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroups
   *
   * @returns {object} metadata of CrashGroups
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'crash_groups',
      type: {
        name: 'Composite',
        className: 'CrashGroups',
        modelProperties: {
          crashGroups: {
            required: true,
            serializedName: 'crash_groups',
            constraints: {
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashGroupsCrashGroupsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashGroupsCrashGroupsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroups;