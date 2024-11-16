(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductsService {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private email = "test@gmail.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
      console.log(emailList);

      console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productsService: ProductsService;
    private mailer: Mailer;

    constructor(productService: ProductsService, mailer: Mailer) {
      this.productsService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productsService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productsService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["test@gmail.com"], "to-clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productsService = new ProductsService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productsService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
