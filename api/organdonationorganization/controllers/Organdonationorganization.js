'use strict';

/**
 * Organdonationorganization.js controller
 *
 * @description: A set of functions called "actions" for managing `Organdonationorganization`.
 */

module.exports = {

  /**
   * Retrieve organdonationorganization records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.organdonationorganization.search(ctx.query);
    } else {
      return strapi.services.organdonationorganization.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a organdonationorganization record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.organdonationorganization.fetch(ctx.params);
  },

  /**
   * Count organdonationorganization records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.organdonationorganization.count(ctx.query);
  },

  /**
   * Create a/an organdonationorganization record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.organdonationorganization.add(ctx.request.body);
  },

  /**
   * Update a/an organdonationorganization record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.organdonationorganization.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an organdonationorganization record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.organdonationorganization.remove(ctx.params);
  }
};
