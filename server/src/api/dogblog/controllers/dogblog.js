'use strict';

/**
 * dogblog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dogblog.dogblog');
