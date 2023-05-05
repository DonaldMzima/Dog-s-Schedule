'use strict';

/**
 * dogblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dogblog.dogblog');
