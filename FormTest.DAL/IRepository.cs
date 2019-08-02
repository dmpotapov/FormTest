using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace FormTest.DAL
{
    /// <summary>
    /// Interface for data storage
    /// </summary>
    /// <typeparam name="TEntity">Entity generic type</typeparam>
    /// <typeparam name="TIdentifier">Entity identifier generic type</typeparam>
    public interface IRepository<TEntity, TIdentifier>
    {
        /// <summary>
        /// Returns entities collection by condition given 
        /// </summary>
        /// <param name="condition"></param>
        /// <returns></returns>
        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> condition = null);

        /// <summary>
        /// Returns entity by id given 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity GetById(TIdentifier id);

        /// <summary>
        /// Adds new entity to the store
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        TEntity Add(TEntity entity);

        /// <summary>
        /// Updates entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        TEntity Update(TEntity entity);

        /// <summary>
        /// Removes entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        TEntity Remove(TEntity entity);
    }
}
