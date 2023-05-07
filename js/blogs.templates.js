(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogs-categories-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li><a class=\"text-black-50 text-decoration-none\" href=\"#\"\r\n            onclick=\"loadBlogs('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":55}}}) : helper)))
    + "')\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":59},"end":{"line":5,"column":67}}}) : helper)))
    + "</a>\r\n    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Categories</h1>\r\n<ul class=\"py-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['blogs-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"clearfix py-3\">\r\n    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "</h3>\r\n    <p class=\"text-black-50\">\r\n        by\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":18}}}) : helper)))
    + "\r\n        in\r\n        <a href=\"#\" onclick=\"loadBlogs('blogs/categories/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "')\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\r\n        on\r\n        "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":27}}}))
    + ".\r\n        <a href=\"#comments\" onclick=\"loadBlogDetail("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":52},"end":{"line":12,"column":58}}}) : helper)))
    + ", true)\">Comments ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\r\n    </p>\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":27}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":14,"column":34},"end":{"line":14,"column":42}}}) : helper)))
    + "\" class=\"float-start me-3 border rounded-4\" />\r\n    <p class=\"text-black-50\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":19}}}) : helper)))
    + "\r\n    </p>\r\n    <a href=\"#\" class=\"btn btn-link readmore ps-0\" onclick=\"loadBlogDetail("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":75},"end":{"line":18,"column":81}}}) : helper)))
    + ")\">Read more</a>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"pagination").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":40,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":37,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>\r\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":36,"column":19}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item disabled\" aria-current=\"page\">\r\n            <a class=\"page-link\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page","hash":{},"data":data,"loc":{"start":{"line":29,"column":42},"end":{"line":29,"column":50}}}) : helper)))
    + "</a>\r\n        </li>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item\">\r\n            <a class=\"page-link\" href=\"#\" onclick=\"loadBlogs('"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "', "
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":34,"column":82},"end":{"line":34,"column":90}}}) : helper)))
    + ")\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":34,"column":93},"end":{"line":34,"column":101}}}) : helper)))
    + "</a>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blogs</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":41,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['details-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"py-3\">\r\n    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "</h3>\r\n    <p class=\"text-black-50\">by\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":18}}}) : helper)))
    + "\r\n        in\r\n        "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\r\n        on\r\n        "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":27}}}))
    + "\r\n        .\r\n        <a href=\"#\">Comments ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\r\n    </p>\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":27}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":14,"column":34},"end":{"line":14,"column":42}}}) : helper)))
    + "\" class=\"float-start me-3 rounded-4\" />\r\n    <div class=\"text-black-50\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":31},"end":{"line":15,"column":48}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n<div class=\"py-3\" id=\"leave-comment\">\r\n    <h3>Leave your comments</h3>\r\n    <form action=\"#\" method=\"post\" class=\"text-black-50\" onsubmit=\"addComment(event)\">\r\n        <input type=\"hidden\" name=\"blogId\" id=\"blogId\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":62},"end":{"line":20,"column":68}}}) : helper)))
    + "\" />\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"mb-3\">\r\n                    <label for=\"name\" class=\"form-label\">Name\r\n                        (Required)</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"\" required />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <div class=\"mb-3\">\r\n                    <label for=\"email\" class=\"form-label\">Email\r\n                        (Required)</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"\" required\r\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <textarea class=\"form-control\" name=\"comment\" id=\"comment\" rows=\"3\" placeholder=\"Enter your comment here\"\r\n                required></textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"form-check form-check-inline\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"agree\" name=\"agree\" value=\"1\" required />\r\n                    <label class=\"form-check-label\" for=\"agree\">Agree to terms and conditions</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col text-end\">\r\n                <button type=\"submit\" class=\"btn btn-link py-0 my-0\">Submit Comment</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <div class=\"text-success\" id=\"responseMessage\">\r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<a name=\"comments\"></a>\r\n<div class=\"bg-dark text-white-50 p-2\">\r\n    COMMENTS ("
    + ((stack1 = alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0)) != null ? stack1 : "")
    + ")\r\n</div>\r\n\r\n<div class=\"py-3 text-black-50\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":4},"end":{"line":73,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":69,"column":11},"end":{"line":69,"column":19}}}) : helper)))
    + " - "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":69,"column":22},"end":{"line":69,"column":41}}}))
    + "</p>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":70,"column":11},"end":{"line":70,"column":22}}}) : helper)))
    + "</p>\r\n        <hr />\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blogs</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":75,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();