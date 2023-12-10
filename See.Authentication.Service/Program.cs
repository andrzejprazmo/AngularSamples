using See.Authentication.Service.Api.Installer;
using See.Authentication.Service.Core.Installer;
using See.Authentication.Service.Infrastructure.Installer;

var webApplicationOptions = new WebApplicationOptions
{
    Args = args,
    ApplicationName = typeof(Program).Assembly.FullName,
    ContentRootPath = Directory.GetCurrentDirectory(),
    EnvironmentName = Environments.Development,
    WebRootPath = "wwwroot/browser"
};

var builder = WebApplication.CreateBuilder(webApplicationOptions);

builder.Services.AddAuthorization();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();
builder.Services.AddApplicationEndpoints();
builder.Services.AddJwt(builder.Configuration).AddAuthorization();
builder.Services.AddCore();
builder.Services.AddInfrastructure();
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseApplicationEndpoints();

app.MapFallbackToFile("index.html");

app.Run();