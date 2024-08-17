'use strict';

/**
 * metal-rate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::metal-rate.metal-rate');
