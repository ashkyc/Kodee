using System;
using System.Collections.Generic;
using System.Text;
using Kodee.Model.Domain;

namespace Kodee.Model.Domain
{
    public class Weather
    {
        public int id { get; set; }

        public double temp { get; set; }
        public double pressure { get; set; }
        public double humidity { get; set; }
        public double temp_min { get; set; }
        public double temp_max { get; set; }

        public List<weather2> weather { get; set; }
    }

    public class weather2
    {
        public int id { get; set; }

        public string main { get; set; }

        public string description { get; set; }

        public string icon { get; set; }
    }
}
