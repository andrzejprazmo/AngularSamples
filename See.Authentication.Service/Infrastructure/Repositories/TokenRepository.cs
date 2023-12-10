using Dapper;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;
using See.Authentication.Service.Core.Common.Interfaces;
using See.Authentication.Service.Domain.Entities;
using See.Authentication.Service.Infrastructure.DataAccess;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace See.Authentication.Service.Infrastructure.Repositories
{
    public class TokenRepository : ITokenRepository
    {
        const string refreshTokenCookieName = "RefreshToken";
        private readonly IConfiguration configuration;
        private readonly IConnectionProvider connectionProvider;
        private readonly HttpContext httpContext;

        public TokenRepository(IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IConnectionProvider connectionProvider)
        {
            this.configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            this.connectionProvider = connectionProvider ?? throw new ArgumentNullException(nameof(connectionProvider));
            httpContext = httpContextAccessor.HttpContext ?? throw new ArgumentNullException(nameof(httpContextAccessor.HttpContext));
        }

        public string CreateToken(UserEntity user)
        {
            var issuer = configuration["Jwt:Issuer"];
            var audience = configuration["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes(configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Id", user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Login),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                 }),
                Expires = DateTime.UtcNow.AddMinutes(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task CreateRefreshToken(Guid userId)
        {
            var refreshToken = new RefreshTokenEntity
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                Expires = DateTime.UtcNow.AddMinutes(20),
            };
            var sql = @"DELETE FROM tokens WHERE user_id = @UserId;
                INSERT INTO tokens (token_id, user_id, expires) VALUES (@Id, @UserId, @Expires)";
            using var connection = connectionProvider.GetSqlConnection();
            await connection.ExecuteAsync(sql, refreshToken);
            httpContext.Response.Cookies.Append(refreshTokenCookieName, refreshToken.Id.ToString(), new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                Expires = DateTime.UtcNow.AddMinutes(60),
                SameSite = SameSiteMode.None
            });
        }

        public async Task<RefreshTokenEntity?> GetRefreshToken()
        {
            if (httpContext.Request.Cookies.TryGetValue(refreshTokenCookieName, out var tokenIdString))
            {
                if (Guid.TryParse(tokenIdString, out var tokenId))
                {
                    var sql = @"SELECT token_id AS Id, user_id AS UserId, expires AS Expires FROM tokens WHERE token_id = @tokenId";
                    using var connection = connectionProvider.GetSqlConnection();
                    return await connection.QuerySingleOrDefaultAsync<RefreshTokenEntity>(sql, new { tokenId });
                }
            }
            return null;
        }

        public Guid? GetUserIdFromToken()
        {
            if (httpContext.Request.Headers.TryGetValue("Authorization", out var authData))
            {
                if (!StringValues.IsNullOrEmpty(authData))
                {
                    var token = authData.ToString().Replace("Bearer ", "");
                    var handler = new JwtSecurityTokenHandler();
                    var jwtToken = handler.ReadJwtToken(token);
                    var userId = jwtToken.Claims.FirstOrDefault(x => x.Type == "Id");
                    if (userId != null && Guid.TryParse(userId.Value, out var result))
                    {
                        return result;
                    }
                }
            }
            return null;
        }

        public async Task DeleteRefreshToken(Guid userId)
        {
            var sql = @"DELETE FROM tokens WHERE user_id = @userId";
            using var connection = connectionProvider.GetSqlConnection();
            await connection.ExecuteAsync(sql, new { userId });
            httpContext.Response.Cookies.Delete(refreshTokenCookieName);
        }
    }
}
