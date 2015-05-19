using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ExamenLC.Startup))]
namespace ExamenLC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
