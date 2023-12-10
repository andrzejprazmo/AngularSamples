namespace See.Authentication.Service.Domain.Entities
{
    public class RefreshTokenEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime Expires { get; set; } = default!;
    }
}