package br.com.surb.myfinances.modulos.product.useCases.ProductFindAll;

import br.com.surb.myfinances.modulos.product.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/products")
public class ProductFindAllResource {

  private final ProductFindAllService productFindAllService;

  public ProductFindAllResource(ProductFindAllService productFindAllService){
    this.productFindAllService = productFindAllService;
  }

  @GetMapping
  public ResponseEntity<Page<ProductDTO>> handle(Pageable pageable){
//    try {
//      Thread.sleep(5000);
//    } catch (InterruptedException e) {
//      e.printStackTrace();
//    }
    Page<ProductDTO> productDTO = productFindAllService.execute(pageable);
    return ResponseEntity.ok().body(productDTO);
  }
}
