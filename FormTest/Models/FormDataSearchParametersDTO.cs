using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FormTest.Models
{
    /// <summary>
    /// Describes parameters for fetching form data
    /// </summary>
    public class FormDataSearchParametersDTO
    {
        /// <summary>
        /// Offset
        /// </summary>
        public int Offset { get; set; }

        /// <summary>
        /// Count
        /// </summary>
        public int Count { get; set; }

        /// <summary>
        /// Fields whose search will be executed by
        /// </summary>
        public IDictionary<string, object> FieldFilters { get; set; } = new Dictionary<string, object>();
    }
}
