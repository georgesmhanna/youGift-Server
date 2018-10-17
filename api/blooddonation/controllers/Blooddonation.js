'use strict';

/**
 * Blooddonation.js controller
 *
 * @description: A set of functions called "actions" for managing `Blooddonation`.
 */

module.exports = {

  /**
   * Retrieve blooddonation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blooddonation.search(ctx.query);
    } else {
      return strapi.services.blooddonation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blooddonation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blooddonation.fetch(ctx.params);
  },

  /**
   * Count blooddonation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blooddonation.count(ctx.query);
  },

  /**
   * Create a/an blooddonation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blooddonation.add(ctx.request.body);
  },

  /**
   * Update a/an blooddonation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blooddonation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blooddonation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blooddonation.remove(ctx.params);
  }
};
