'use strict';

/**
 * Donor.js controller
 *
 * @description: A set of functions called "actions" for managing `Donor`.
 */

module.exports = {

  /**
   * Retrieve donor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.donor.search(ctx.query);
    } else {
      return strapi.services.donor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a donor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.donor.fetch(ctx.params);
  },

  /**
   * Count donor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.donor.count(ctx.query);
  },

  /**
   * Create a/an donor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.donor.add(ctx.request.body);
  },

  /**
   * Update a/an donor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.donor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an donor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.donor.remove(ctx.params);
  }
};
