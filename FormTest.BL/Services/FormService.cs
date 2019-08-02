using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using FormTest.DAL;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;

namespace FormTest.BL.Services
{
    /// <summary>
    /// A very basic implementation of form service
    /// </summary>
    public class FormService : IFormService
    {
        private MongoDbFormDataRepository _repository;

        public FormService(MongoDbFormDataRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<IDictionary<string, object>> Search(int offset, int count, IDictionary<string, object> fieldFilters)
        {
            /* 
            * definitely not a good solution to load all entities into the memory
            * but I didn't come up with a better one yet, as MongoDB driver doesn't support All()
            * better solution will be to just write a method in Repository implementation to fetch data using MongoDb FilterDefinitions
            * but imo it will a bit look like a crutch
            */
            var res = _repository.Get(); 

            return res.Where(r => fieldFilters.All(f => r[f.Key].ToString() == f.Value.ToString())).Skip(offset).Take(count);
        }

        public void Submit(IDictionary<string, object> formData)
        {
            if (formData == null) throw new ArgumentNullException(nameof(formData));

            _repository.Add(formData);
        }
    }
}
