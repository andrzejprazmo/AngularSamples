using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using See.Authentication.Service.Core.Commands.Authenticate;
using See.Authentication.Service.Core.Commands.RefreshToken;

namespace See.Authentication.Service.Api.Endpoints.Auth
{
    public class AuthenticationEndpoints : IEndpointsModule
    {
        public void RegisterEndpoints(IEndpointRouteBuilder app)
        {
            app.MapPost("api/auth/sign-in", handler: Authenticate).WithName("Authenticate");
            app.MapGet("api/auth/refresh-token", handler: RefreshToken).WithName("RefreshToken");
            app.MapGet("api/auth/test", handler: AuthTest).WithName("AuthTest");
        }

        [ProducesResponseType(200, Type = typeof(AuthenticateResponse))]
        private async Task<IResult> Authenticate(HttpContext context, [FromServices] IMediator mediator, [FromBody] AuthenticateRequest request)
        {
            var result = await mediator.Send(request);
            return result.Match(data => Results.Ok(data), (error) =>
            {
                if (error is ValidationException)
                {
                    return Results.BadRequest(error.Message);
                }
                return Results.StatusCode(500);
            });

        }


        [ProducesResponseType(200, Type = typeof(RefreshTokenResponse))]
        private async Task<IResult> RefreshToken(HttpContext context, [FromServices] IMediator mediator)
        {
            var result = await mediator.Send(new RefreshTokenRequest());
            return result.Match(data => Results.Ok(data), (error) =>
            {
                if (error is ValidationException)
                {
                    return Results.BadRequest(error.Message);
                }
                if (error is SecurityTokenExpiredException)
                {
                    return Results.Unauthorized();
                }
                return Results.StatusCode(500);
            });

        }

        [Authorize]
        private Task<IResult> AuthTest(HttpContext context)
        {
            return Task.FromResult(Results.Ok());
        }
    }
}
