using System;
using System.Collections.Generic;
using System.Text;

namespace Kodee.Services.Interfaces.Security
{
    public interface IIdentityProvider<T>
    {
        T GetCurrentUserId();
    }
}
