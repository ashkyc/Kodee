using System.Security.Claims;
using System.Threading.Tasks;
using Kodee.Model.Domain;
using Kodee.Services.Interfaces.Security;

namespace Kodee.Web.Core.Services
{
    public interface IAuthenticationService<T> : IIdentityProvider<T>
    {
        IUserAuthData GetCurrentUser();
        bool IsLoggedIn();
        Task LogInAsync(IUserAuthData user, params Claim[] extraClaims);
        Task LogOutAsync();
    }
}