using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using See.Authentication.Service.Api.Endpoints;
using System.Reflection;
using System.Text;

namespace See.Authentication.Service.Api.Installer
{
    public static class ApiInstaller
    {
        public static IServiceCollection AddApplicationEndpoints(this IServiceCollection services)
        {
            var rules = Assembly.GetExecutingAssembly().GetTypes().Where(t => !t.IsAbstract && t.IsClass && typeof(IEndpointsModule).IsAssignableFrom(t));

            foreach (var rule in rules)
            {
                services.Add(new ServiceDescriptor(typeof(IEndpointsModule), rule, ServiceLifetime.Singleton));
            }

            return services;
        }

        public static void UseApplicationEndpoints(this WebApplication app)
        {
            var endpoints = app.Services.GetServices<IEndpointsModule>();
            foreach (var endpoint in endpoints)
            {
                if (endpoint != null)
                {
                    endpoint.RegisterEndpoints(app);
                }
            }
        }

        public static IServiceCollection AddJwt(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = configuration["Jwt:Issuer"],
                    ValidAudience = configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"])),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true
                };
            });
            return services;
        }
    }
}
