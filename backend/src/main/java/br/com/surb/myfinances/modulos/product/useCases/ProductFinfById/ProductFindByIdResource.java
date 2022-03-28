package br.com.surb.myfinances.modulos.product.useCases.ProductFinfById;

import br.com.surb.myfinances.modulos.product.dto.ProductDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/products")
public class ProductFindByIdResource {

  private final ProductFindByIdService productFindByIdService;

  public ProductFindByIdResource(ProductFindByIdService productFindByIdService){
    this.productFindByIdService = productFindByIdService;
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<ProductDTO> handle(@PathVariable Long id){
    ProductDTO dto = productFindByIdService.execute(id);
    return ResponseEntity.ok().body(dto);
  }
}
