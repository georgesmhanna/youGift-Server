'use strict';

/**
 * Organ.js controller
 *
 * @description: A set of functions called "actions" for managing `Organ`.
 */

module.exports = {

  /**
   * Retrieve organ records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.organ.search(ctx.query);
    } else {
      return strapi.services.organ.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a organ record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.organ.fetch(ctx.params);
  },

  /**
   * Count organ records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.organ.count(ctx.query);
  },

  /**
   * Create a/an organ record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.organ.add(ctx.request.body);
  },

  /**
   * Update a/an organ record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.organ.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an organ record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.organ.remove(ctx.params);
  }
};
