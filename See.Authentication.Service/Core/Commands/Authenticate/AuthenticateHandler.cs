using FluentValidation;
using LanguageExt.Common;
using MediatR;
using See.Authentication.Service.Core.Common.Helpers;
using See.Authentication.Service.Core.Common.Interfaces;

namespace See.Authentication.Service.Core.Commands.Authenticate;

public record AuthenticateResponse(string Token);
public record AuthenticateRequest(string Login, string Password) : IRequest<Result<AuthenticateResponse>>;
public class AuthenticateHandler : IRequestHandler<AuthenticateRequest, Result<AuthenticateResponse>>
{
    private readonly IUserRepository userRepository;
    private readonly IValidator<AuthenticateRequest> validator;
    private readonly ITokenRepository tokenRepository;

    public AuthenticateHandler(IUserRepository userRepository, IValidator<AuthenticateRequest> validator, ITokenRepository tokenRepository)
    {
        this.userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        this.validator = validator ?? throw new ArgumentNullException(nameof(validator));
        this.tokenRepository = tokenRepository ?? throw new ArgumentNullException(nameof(tokenRepository));
    }

    public async Task<Result<AuthenticateResponse>> Handle(AuthenticateRequest request, CancellationToken cancellationToken)
    {
        var validationResult = validator.Validate(request);
        if (validationResult.IsValid)
        {
            var user = await userRepository.GetUserByLogin(request.Login);
            if (user != null)
            {
                var password = PasswordHelper.EncryptPassword(user.Id, request.Password);
                if(string.Equals(password, user.Password, StringComparison.Ordinal))
                {
                    var token = tokenRepository.CreateToken(user);
                    await tokenRepository.CreateRefreshToken(user.Id);
                    return new AuthenticateResponse(token);
                }
                return new Result<AuthenticateResponse>(new ValidationException("Bad user password."));
            }
            return new Result<AuthenticateResponse>(new ValidationException("User with this name does not exist."));
        }
        return new Result<AuthenticateResponse>(new ValidationException(validationResult.Errors));
    }
}
