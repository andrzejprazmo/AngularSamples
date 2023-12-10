using FluentValidation;

namespace See.Authentication.Service.Core.Installer
{
    public static class CoreInstaller
    {
        public static IServiceCollection AddCore(this IServiceCollection services)
        {
            services.AddMediatR(config =>
            {
                config.RegisterServicesFromAssembly(typeof(CoreInstaller).Assembly);
            });
            services.AddValidatorsFromAssembly(typeof(CoreInstaller).Assembly);

            return services;
        }
    }
}
