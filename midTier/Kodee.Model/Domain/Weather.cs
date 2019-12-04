using System;
using System.Collections.Generic;
using System.Text;

namespace Kodee.Model.Domain
{
    public class Weather
    {
        public double temp { get; set; }
        public double temp_min { get; set; }
        public double temp_max { get; set; }
        public double humidity { get; set; }
        public string weather { get; set; }
    }
}
