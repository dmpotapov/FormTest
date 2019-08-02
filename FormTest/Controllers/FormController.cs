using FormTest.BL.Services;
using FormTest.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FormTest.Controllers
{
    /// <summary>
    /// API endpoint for processing forms data
    /// </summary>
    [Route("api/[controller]")]
    public class FormController : Controller
    {
        private readonly IFormService _formService;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="formService">Class for operating forms data</param>
        public FormController(IFormService formService)
        {
            _formService = formService;
        }

        /// <summary>
        /// Gets data by given criteria 
        /// </summary>
        /// <param name="formSearchData">Search parameters</param>
        /// <returns>Form data found</returns>
        [HttpPost("get")]
        public IActionResult Get([FromBody]FormDataSearchParametersDTO formDataSearchParameters)
        {
            if (formDataSearchParameters == null) return BadRequest("Form data search parameters are empty");

            try
            {
                var res = _formService.Search(formDataSearchParameters.Offset, formDataSearchParameters.Count, formDataSearchParameters.FieldFilters);
                return Ok(res);
            }
            catch (Exception e)
            {
                return BadRequest("An error occured while trying to get form data");
            }
        }

        /// <summary>
        /// Submits form data
        /// </summary>
        /// <param name="formData">Form data to submit</param>
        /// <returns></returns>
        [HttpPost("submit")]
        public IActionResult Submit([FromBody]IDictionary<string, object> formData)
        {
            if (formData == null) return BadRequest("Form data are empty");

            try
            {
                _formService.Submit(formData);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("An error occured while trying to save form data");
            }
        }
    }
}
