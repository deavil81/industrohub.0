const fs = require("fs")

const template = fs.readFileSync("seo/template.html","utf8")
const products = JSON.parse(fs.readFileSync("seo/products.json"))
const cities = JSON.parse(fs.readFileSync("seo/cities.json"))

products.forEach(product=>{
  cities.forEach(city=>{

    let page = template
      .replaceAll("{{product}}", product)
      .replaceAll("{{city}}", city)

    const filename =
      "pages/" +
      product.toLowerCase().replace(/ /g,"-") +
      "-" +
      city.toLowerCase().replace(/ /g,"-") +
      ".html"

    fs.writeFileSync(filename,page)

  })
})