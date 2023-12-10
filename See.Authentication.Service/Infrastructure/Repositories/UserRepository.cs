using Dapper;
using See.Authentication.Service.Core.Common.Interfaces;
using See.Authentication.Service.Domain.Entities;
using See.Authentication.Service.Infrastructure.DataAccess;

namespace See.Authentication.Service.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IConnectionProvider connectionProvider;

        public UserRepository(IConnectionProvider connectionProvider)
        {
            this.connectionProvider = connectionProvider ?? throw new ArgumentNullException(nameof(connectionProvider));
        }

        public async Task<UserEntity?> GetUserById(Guid userId)
        {
            var sql = @"SELECT u.user_id AS Id
                  ,u.user_name AS Login
                  ,u.user_first_name AS FirstName
                  ,u.user_last_name AS LastName
                  ,u.user_email_address AS EmailAddress
                  ,p.password AS Password
              FROM users u
              JOIN passwords p ON u.user_id = p.user_id AND p.active = 1
              WHERE u.user_id = @userId";
            using var connection = connectionProvider.GetSqlConnection();
            return await connection.QuerySingleOrDefaultAsync<UserEntity>(sql, new { userId });
        }

        public async Task<UserEntity?> GetUserByLogin(string login)
        {
            var sql = @"SELECT TOP (1) u.user_id AS Id
                  ,u.user_name AS Login
                  ,u.user_first_name AS FirstName
                  ,u.user_last_name AS LastName
                  ,u.user_email_address AS EmailAddress
	              ,p.password AS Password
              FROM users u
              JOIN passwords p ON u.user_id = p.user_id AND p.active = 1
              WHERE u.user_name = @login";
            using var connection = connectionProvider.GetSqlConnection();
            return await connection.QuerySingleOrDefaultAsync<UserEntity>(sql, new { login });
        }
    }
}
