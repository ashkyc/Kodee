using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kodee.Model.Requests
{
    public class AddressAddRequest
    {

        [StringLength(255, MinimumLength = 3, ErrorMessage = "{0} must be greater than {2} and less than {1}")]
        public string LineOne { get; set; }

        [StringLength(255, MinimumLength = 1, ErrorMessage = "{0} must be greater than {2} and less than {1}")]
        public string LineTwo { get; set; }

        [StringLength(255, MinimumLength = 2, ErrorMessage = "{0} must be greater than {2} and less than {1}")]
        public string City { get; set; }

        [Required]
        [RegularExpression(@"^\d{5}(-\d{4})?$", ErrorMessage = "Invalid Zip")]
        public string Zip { get; set; }

        [StringLength(50, MinimumLength = 2, ErrorMessage = "{0} must be greater than {2} and less than {1}")]
        public string State { get; set; }

        [Range(-90, 90)]
        public double? Latitude { get; set; }

        [Range(-180, 180)]
        public double? Longitude { get; set; }

    }
}
