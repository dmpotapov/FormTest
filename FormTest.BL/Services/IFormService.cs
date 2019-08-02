using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace FormTest.BL.Services
{
    /// <summary>
    /// Interface for form data service
    /// </summary>
    public interface IFormService
    {
        /// <summary>
        /// Submits form data
        /// </summary>
        /// <param name="formData">Form data</param>
        void Submit(IDictionary<string, object> formData);

        /// <summary>
        /// Executes search by fields given with pagination parameters set
        /// </summary>
        /// <param name="offset">Offset</param>
        /// <param name="count">Count</param>
        /// <param name="fieldFilters">Fields whose search will be executed by</param>
        /// <returns></returns>
        IEnumerable<IDictionary<string, object>> Search(int offset, int count, IDictionary<string, object> fieldFilters);
    }
}
