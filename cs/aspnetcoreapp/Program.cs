var builder = WebApplication.CreateBuilder(args);

Console.WriteLine(builder.GetType());

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();
Console.WriteLine(app.GetType());

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
