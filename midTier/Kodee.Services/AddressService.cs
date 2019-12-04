using Kodee.Data.Providers;
using Kodee.Model.Domain;
using Kodee.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Kodee.Model.Requests;
using System.Data.SqlClient;

namespace Kodee.Services
{
    public class AddressService : IAddressService
    {
        private IDataProvider _dataProvider = null;

        public AddressService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public int Insert(AddressAddRequest model)
        {
            int id = 0;

            _dataProvider.ExecuteNonQuery(
                "dbo.Addresses_Insert",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@LineOne", model.LineOne);
                    paramCol.AddWithValue("@LineTwo", model.LineTwo);
                    paramCol.AddWithValue("@City", model.City);
                    paramCol.AddWithValue("@Zip", model.Zip);
                    paramCol.AddWithValue("@State", model.State);
                    paramCol.AddWithValue("@Latitude", model.Latitude);
                    paramCol.AddWithValue("@Longitude", model.Longitude);

                    //Output param
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = SqlDbType.Int;
                    parm.Direction = ParameterDirection.Output;
                    paramCol.Add(parm);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    Int32.TryParse(paramCol["@Id"].Value.ToString(), out id);
                }
                );

            return id;
        }
    }
}



