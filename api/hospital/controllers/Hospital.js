'use strict';

/**
 * Hospital.js controller
 *
 * @description: A set of functions called "actions" for managing `Hospital`.
 */

module.exports = {

  /**
   * Retrieve hospital records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hospital.search(ctx.query);
    } else {
      return strapi.services.hospital.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hospital record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hospital.fetch(ctx.params);
  },

  /**
   * Count hospital records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hospital.count(ctx.query);
  },

  /**
   * Create a/an hospital record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hospital.add(ctx.request.body);
  },

  /**
   * Update a/an hospital record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hospital.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hospital record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hospital.remove(ctx.params);
  }
};
