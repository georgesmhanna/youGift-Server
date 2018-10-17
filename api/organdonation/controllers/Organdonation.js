'use strict';

/**
 * Organdonation.js controller
 *
 * @description: A set of functions called "actions" for managing `Organdonation`.
 */

module.exports = {

  /**
   * Retrieve organdonation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.organdonation.search(ctx.query);
    } else {
      return strapi.services.organdonation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a organdonation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.organdonation.fetch(ctx.params);
  },

  /**
   * Count organdonation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.organdonation.count(ctx.query);
  },

  /**
   * Create a/an organdonation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.organdonation.add(ctx.request.body);
  },

  /**
   * Update a/an organdonation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.organdonation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an organdonation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.organdonation.remove(ctx.params);
  }
};
