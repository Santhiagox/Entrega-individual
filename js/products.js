const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

// Petición HTTP
fetch(URL)
  .then((resp) => resp.json())
  .then((datos) => {
    let ulListaAuto = document.getElementById("vehiculos");
    console.log(ulListaAuto);
    for (let i = 0; i < datos.products.length; i++) {
      ulListaAuto.innerHTML += `
            <li class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded" src=${datos.products[i].image}></div>
                <div class="col-md-6 mt-1">
                    <h5>${datos.products[i].name}</h5>
                    <p class="text-justify para mb-0">${datos.products[i].description}</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">${datos.products[i].currency} ${datos.products[i].cost}</h4>
                    </div>
                    <h6>Unidades vendidas: ${datos.products[i].soldCount}</h6>
                </div>
            </li>
        `;
    }
  });
