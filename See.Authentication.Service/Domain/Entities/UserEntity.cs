namespace See.Authentication.Service.Domain.Entities
{
    public class UserEntity
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; } = default!;
        public string LastName { get; set; } = default!;
        public string Login { get; set; } = default!;
        public string EmailAddres { get; set; } = default!;
        public string Password { get; set; } = default!;
    }
}
