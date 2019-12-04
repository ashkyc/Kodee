using Kodee.Data.Providers;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Kodee.Services
{
    public class WeatherService
    {
        private IDataProvider _dataProvider = null;

        public WeatherService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }



    }
}
