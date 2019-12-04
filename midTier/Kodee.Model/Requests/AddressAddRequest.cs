using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kodee.Model.Requests
{
    public class AddressAddRequest
    {

        [StringLength(500, MinimumLength = 3, ErrorMessage = "{0} must be greater than {2} and less than {1}")]
        public string Address { get; set; }

        [Range(-90, 90)]
        public double? Latitude { get; set; }

        [Range(-180, 180)]
        public double? Longitude { get; set; }

    }
}
