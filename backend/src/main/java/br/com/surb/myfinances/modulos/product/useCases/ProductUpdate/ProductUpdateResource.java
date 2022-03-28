package br.com.surb.myfinances.modulos.product.useCases.ProductUpdate;

import br.com.surb.myfinances.modulos.product.dto.ProductUpdateDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/products")
public class ProductUpdateResource {

  private final ProductUpdateService productUpdateService;

  public ProductUpdateResource(ProductUpdateService productUpdateService){
    this.productUpdateService = productUpdateService;
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<ProductUpdateDTO> handle(@PathVariable Long id, @RequestBody ProductUpdateDTO productUpdateDTO){
    productUpdateDTO = productUpdateService.execute(id, productUpdateDTO);
    return ResponseEntity.ok().body(productUpdateDTO);
  }
}
