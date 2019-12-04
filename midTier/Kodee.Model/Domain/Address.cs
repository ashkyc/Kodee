using System;
using System.Collections.Generic;
using System.Text;

namespace Kodee.Model.Domain
{
    public class Location
    {
        public string LineOne { get; set; }

        public string LineTwo { get; set; }

        public string City { get; set; }

        public string Zip { get; set; }

        public string State { get; set; }

        public double? Latitude { get; set; }

        public double? Longitude { get; set; }
    }
}
