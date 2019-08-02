using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace FormTest.DAL
{
    /// <summary>
    /// Implementation of Repository for MongoDB forms data storage
    /// </summary>
    public class MongoDbFormDataRepository : IRepository<IDictionary<string, object>, long>
    {
        private readonly IMongoCollection<IDictionary<string, object>> _col;

        public MongoDbFormDataRepository(IMongoClient client, string dbName, string colName)
        {
            var db = client.GetDatabase(dbName);
            _col = db.GetCollection<IDictionary<string, object>>(colName);
        }

        public IDictionary<string, object> Add(IDictionary<string, object> entity)
        {
            if (entity == null) throw new ArgumentNullException(nameof(entity));

            _col.InsertOne(entity);
            return entity;
        }

        public IEnumerable<IDictionary<string, object>> Get(Expression<Func<IDictionary<string, object>, bool>> condition = null)
        {
            if (condition == null)
            {
                return _col.Find(c => true).ToList();
            }
            else
            {
                return _col.Find(condition).ToList();
            }
        }

        // some methods weren't implemented because of their redundancy
        public IDictionary<string, object> GetById(long id)
        {
            throw new NotImplementedException();
        }

        public IDictionary<string, object> Remove(IDictionary<string, object> entity)
        {
            throw new NotImplementedException();
        }

        public IDictionary<string, object> Update(IDictionary<string, object> entity)
        {
            throw new NotImplementedException();
        }
    }
}
