using See.Authentication.Service.Domain.Entities;

namespace See.Authentication.Service.Core.Common.Interfaces
{
    public interface ITokenRepository
    {
        string CreateToken(UserEntity user);
        Task CreateRefreshToken(Guid userId);
        Task<RefreshTokenEntity?> GetRefreshToken();
        Guid? GetUserIdFromToken();
        Task DeleteRefreshToken(Guid userId);
    }
}
