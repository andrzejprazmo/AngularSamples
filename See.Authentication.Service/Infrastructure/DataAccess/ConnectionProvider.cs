using System.Data.SqlClient;

namespace See.Authentication.Service.Infrastructure.DataAccess
{
    public interface IConnectionProvider
    {
        SqlConnection GetSqlConnection();
    }
    public class ConnectionProvider : IConnectionProvider
    {
        private readonly IConfiguration _configuration;

        public ConnectionProvider(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public SqlConnection GetSqlConnection() => new SqlConnection(_configuration.GetConnectionString("Authentication"));
    }
}
