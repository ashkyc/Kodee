using Kodee.Model.Requests;

namespace Kodee.Services
{
    public interface IAddressService
    {
        int Insert(AddressAddRequest model);
    }
}