using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Kodee.Model.Domain;
using Kodee.Model.Requests;
using Kodee.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json.Linq;

namespace Kodee.Controllers
{
    [Route("api/weather")]
    [ApiController]
    public class WeatherApiController : ControllerBase
    {
        private IAddressService _addressService = null;
        private IMemoryCache _cache;

        public WeatherApiController(IAddressService addressService, IMemoryCache memoryCache)
        {
            _addressService = addressService;
            _cache = memoryCache;
        }

        [HttpPost]
        public async Task<ActionResult<dynamic>> GetWeather(AddressAddRequest model)
        {
            //var weatherResult = new List<Weather>();
            //if(!_cache.TryGetValue("id", out weatherResult))
            {
                string api = "xxxxxxxxxxxx";
                string mode = "json";
                string units = "imperial";
                string requestUri = string.Format($"https://api.openweathermap.org/data/2.5/weather?mode={mode}&appid={api}&units={units}&lat={model.Latitude}&lon={model.Longitude}");

                try
                {
                    using (var client = new HttpClient())
                    {
                        Task<HttpResponseMessage> request = client.GetAsync(requestUri);

                        if (request.Result.IsSuccessStatusCode)
                        {
                            string content = await request.Result.Content.ReadAsStringAsync();
                            dynamic result = JObject.Parse(content);
                            //var weatherData = new Weather();
                            //weatherData.id = result.id;
                            //weatherData.temp = result.main.temp;
                            //weatherData.temp_min = result.main.temp_min;
                            //weatherData.temp_max = result.main.temp_max;
                            //weatherData.weather = result.weather;
                            //_cache.Set("id", weatherData);
                            return result;
                        }
                        else
                        {
                            string error = await request.Result.Content.ReadAsStringAsync();
                            return StatusCode(400);
                        }
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(500, ex.Message);
                }
            }
            
        }

        [HttpPost("forecast")]
        public async Task<ActionResult<dynamic>> GetForecast(AddressAddRequest model)
        {
            string api = "xxxxxxxxxxx";
            string mode = "json";
            string units = "imperial";
            string requestUri = string.Format($"https://api.openweathermap.org/data/2.5/forecast?mode={mode}&appid={api}&units={units}&lat={model.Latitude}&lon={model.Longitude}");

            try
            {
                using (var client = new HttpClient())
                {
                    Task<HttpResponseMessage> request = client.GetAsync(requestUri);

                    if (request.Result.IsSuccessStatusCode)
                    {
                        string content = await request.Result.Content.ReadAsStringAsync();
                        dynamic result = JObject.Parse(content);
                        return result;
                    }
                    else
                    {
                        string error = await request.Result.Content.ReadAsStringAsync();
                        return StatusCode(400);
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("memorycache")]
        public string Get()
        {
            var cacheEntry = _cache.GetOrCreate("MyCacheKey", entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(1800);
                return LongTimeOperation();
            });
            return cacheEntry;
        }

        private string LongTimeOperation()
        {
            Thread.Sleep(5000);
            return "Long time operation done!";
        }

    }


}
   