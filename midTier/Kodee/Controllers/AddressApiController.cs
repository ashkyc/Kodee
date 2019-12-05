using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Kodee.Model.Domain;
using Kodee.Model.Requests;
using Kodee.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Kodee.Controllers
{
    [Route("api/addresses")]
    [ApiController]
    public class AddressApiController : ControllerBase
    {
        private IAddressService _addressService = null;

        public AddressApiController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpPost]
        public ActionResult<int> Insert(AddressAddRequest model)
        {
            try
            {
                int id = _addressService.Insert(model);
                return id;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        
    }
}