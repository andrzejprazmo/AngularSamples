using See.Authentication.Service.Domain.Entities;

namespace See.Authentication.Service.Core.Common.Interfaces
{
    public interface IUserRepository
    {
        Task<UserEntity?> GetUserById(Guid userId);
        Task<UserEntity?> GetUserByLogin(string login);
    }
}
