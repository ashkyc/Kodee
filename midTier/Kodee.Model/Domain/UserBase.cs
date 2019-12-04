using System;
using System.Collections.Generic;
using System.Text;

namespace Kodee.Model.Domain
{
    public class UserBase : IUserAuthData
    {
        public int Id
        {
            get; set;
        }

        public IEnumerable<string> Roles
        {
            get; set;
        }

        public object TenantId
        {
            get; set;
        }
    }
}
