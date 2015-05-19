using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExamenLC.Controllers
{
    public class RolController : Controller
    {
        // GET: Rol
        private db50834607feca4576ac49a49d0060b231Entities DB = new db50834607feca4576ac49a49d0060b231Entities();
        public ActionResult Index()
        {
            return View();
        }
          
        public JsonResult GetAll()
        {
            DB.Configuration.ProxyCreationEnabled = false;
            var lista = DB.Rol.ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Rol r)
        {
            DB.Rol.Add(r);
            DB.SaveChanges();
            return Json(r, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Rol r)
        {
            DB.Entry(r).State = EntityState.Modified;
            DB.SaveChanges();
            return Json(r, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Delete(string id)
        {
            var nId = int.Parse(id);
            var r = DB.Rol.FirstOrDefault(x => x.id == nId);
            DB.Rol.Remove(r);
            DB.SaveChanges();

            return Json(r, JsonRequestBehavior.AllowGet);
        }
    }

}