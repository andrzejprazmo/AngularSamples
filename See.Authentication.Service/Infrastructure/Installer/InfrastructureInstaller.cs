using See.Authentication.Service.Core.Common.Interfaces;
using See.Authentication.Service.Infrastructure.DataAccess;
using See.Authentication.Service.Infrastructure.Repositories;

namespace See.Authentication.Service.Infrastructure.Installer
{
    public static class InfrastructureInstaller
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddSingleton<IConnectionProvider, ConnectionProvider>();

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<ITokenRepository, TokenRepository>();

            return services;
        }
    }
}
