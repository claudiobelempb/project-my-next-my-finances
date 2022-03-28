package br.com.surb.myfinances.modulos.product.useCases.ProductDelete;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/products")
public class ProductDeleteResource {

  private final ProductDeleteService productDeleteService;

  public ProductDeleteResource(ProductDeleteService productDeleteService){
    this.productDeleteService = productDeleteService;
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<Void> detele(@PathVariable Long id){
    productDeleteService.execute(id);
    return ResponseEntity.noContent().build();
  }
}
