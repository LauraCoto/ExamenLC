using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExamenLC.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        private db50834607feca4576ac49a49d0060b231Entities DB = new db50834607feca4576ac49a49d0060b231Entities();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllRol()
        {
            DB.Configuration.ProxyCreationEnabled = false;
            var lista = DB.Rol.ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);
        }
          
        public JsonResult GetAll()
        {
            DB.Configuration.ProxyCreationEnabled = false;
            var lista = DB.Usuario.ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Usuario u)
        {
            DB.Usuario.Add(u);
            DB.SaveChanges();
            return Json(u, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Usuario u)
        {
            DB.Entry(u).State = EntityState.Modified;
            DB.SaveChanges();
            return Json(u, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Delete(string id)
        {
            var nId = int.Parse(id);
            var u = DB.Usuario.FirstOrDefault(x => x.idusuario == nId);
            DB.Usuario.Remove(u);
            DB.SaveChanges();

            return Json(u, JsonRequestBehavior.AllowGet);
        }
    }    
}