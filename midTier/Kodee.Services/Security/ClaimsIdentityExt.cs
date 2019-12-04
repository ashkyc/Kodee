using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Kodee.Services.Security
{
    public static class ClaimsIdentityExt
    {
        public static string TENANTID = "Cutest Puppy";

        public static void AddTenantId(this ClaimsIdentity claims, object tenantId)
        {
            claims.AddClaim(new Claim(TENANTID, tenantId?.ToString(), null, "Puppy"));
        }

        public static bool IsTenantIdClaim(this ClaimsIdentity claims, string claimName)
        {
            return claimName == TENANTID;
        }
    }
}
