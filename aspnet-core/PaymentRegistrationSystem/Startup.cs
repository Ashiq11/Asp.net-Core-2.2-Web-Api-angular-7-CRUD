using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Serialization;
using PaymentRegistrationSystem.EntityFrameworkCore;
using PaymentRegistrationSystem.Models;

namespace PaymentRegistrationSystem
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)

                // custom addJson NamingStrategy using Newtonsoft.Json.Serialization;
                .AddJsonOptions(options=>{
                    var resolver = options.SerializerSettings.ContractResolver;
                    if (resolver != null)
                        (resolver as DefaultContractResolver).NamingStrategy = null;
                });
           
            //custom added DbContext for SqlServer conection
            services.AddDbContext<PaymentDetailDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("Default")));

            /*
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Info { Title = "Swagger API", Version = "v1" });
                options.DocInclusionPredicate((docName, description) => true);

                //Note: This is just for showing Authorize button on the UI. 
                //Authorize button's behaviour is handled in wwwroot/swagger/ui/index.html
                options.AddSecurityDefinition("Bearer", new BasicAuthScheme());
            });
            */
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();

            /*
            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger();
            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)

            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint(_appConfiguration["App:SwaggerEndPoint"], "Swagger API V1");
                options.IndexStream = () => Assembly.GetExecutingAssembly()
                    .GetManifestResourceStream("Raasforce.Web.wwwroot.swagger.ui.index.html");
                options.InjectBaseUrl(_appConfiguration["App:ServerRootAddress"]);
            }); //URL: /swagger
            */
        }
    }
}
