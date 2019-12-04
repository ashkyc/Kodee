using System.Collections.Generic;

namespace Kodee.Model.Domain
{
    public interface IUserAuthData
    {
        int Id { get; }
        IEnumerable<string> Roles { get; }
        object TenantId { get; }
    }
}