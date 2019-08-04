using System;
using System.Collections.Generic;
using System.Text;

namespace FormTest.BL.Models
{
    public class FormDataSearchResult
    {
        public int Total { get; set; }
        public IEnumerable<IDictionary<string, object>> Items { get; set; }
    }
}
