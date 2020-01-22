using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using Microsoft.AspNet.FriendlyUrls;
namespace demoForms
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)

        {

            routes.EnableFriendlyUrls();
            routes.MapPageRoute("", "formulario", "~/formulario.aspx");
            routes.MapPageRoute("", "Customers", "~/Customers.aspx");
            routes.MapPageRoute("GetCustomer","GetCustomer/{CustomerId}","~/Customers.aspx");
            routes.MapPageRoute("", "Products", "~/Products.aspx");
            routes.MapPageRoute("GetProduct", "GetProduct/{ProductId}","~/Products.aspx");

        }
    }
}