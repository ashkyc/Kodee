using System;
using System.Collections.Generic;
using System.Text;

namespace Kodee.Model.Domain
{
    public class Location
    {
        public string Address { get; set; }

        public double? Latitude { get; set; }

        public double? Longitude { get; set; }
    }
}
