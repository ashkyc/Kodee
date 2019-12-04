using System;
using System.Data;
using System.Data.SqlClient;

namespace Kodee.Data.Providers
{
    public interface IDataProvider
    {
        void ExecuteCmd(string storedProc, Action<SqlParameterCollection> inputParamMapper, Action<IDataReader, short> singleRecordMapper, Action<SqlParameterCollection> returnParameters = null, Action<SqlCommand> cmdModifier = null);
        int ExecuteNonQuery(string storedProc, Action<SqlParameterCollection> inputParamMapper, Action<SqlParameterCollection> returnParameters = null);
    }
}