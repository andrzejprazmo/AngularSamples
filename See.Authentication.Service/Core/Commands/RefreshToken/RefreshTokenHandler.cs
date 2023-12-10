using FluentValidation;
using LanguageExt.Common;
using MediatR;
using Microsoft.IdentityModel.Tokens;
using See.Authentication.Service.Core.Common.Interfaces;

namespace See.Authentication.Service.Core.Commands.RefreshToken;

public record RefreshTokenResponse(string Token);
public record RefreshTokenRequest : IRequest<Result<RefreshTokenResponse>>;
public class RefreshTokenHandler : IRequestHandler<RefreshTokenRequest, Result<RefreshTokenResponse>>
{
    private readonly IUserRepository userRepository;
    private readonly ITokenRepository tokenRepository;

    public RefreshTokenHandler(IUserRepository userRepository, ITokenRepository tokenRepository)
    {
        this.userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        this.tokenRepository = tokenRepository ?? throw new ArgumentNullException(nameof(tokenRepository));
    }
    public async Task<Result<RefreshTokenResponse>> Handle(RefreshTokenRequest request, CancellationToken cancellationToken)
    {
        var refreshToken = await tokenRepository.GetRefreshToken();
        var userId = tokenRepository.GetUserIdFromToken();
        if (refreshToken != null && refreshToken.Expires > DateTime.UtcNow && userId.HasValue)
        {
            var user = await userRepository.GetUserById(userId.Value);
            if (user != null && user.Id == refreshToken.UserId)
            {
                var token = tokenRepository.CreateToken(user);
                await tokenRepository.CreateRefreshToken(user.Id);
                return new RefreshTokenResponse(token);
            }
            return new Result<RefreshTokenResponse>(new ValidationException("User with this token does not exist."));
        }
        if (userId.HasValue)
        {
            await tokenRepository.DeleteRefreshToken(userId.Value);
        }
        return new Result<RefreshTokenResponse>(new SecurityTokenExpiredException());
    }

}
