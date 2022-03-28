package br.com.surb.myfinances.modulos.product.useCases.ProductCreate;

import br.com.surb.myfinances.modulos.product.dto.ProductCreateDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/api/products")
@CrossOrigin("*")
public class ProductCreateResource {

  private final ProductCreateService productCreateService;

  public ProductCreateResource(ProductCreateService productCreateService) {
    this.productCreateService = productCreateService;
  }

  @PostMapping
  public ResponseEntity<ProductCreateDTO> handle(@RequestBody ProductCreateDTO productCreateDTO) {
    productCreateDTO = productCreateService.run(productCreateDTO);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(productCreateDTO.getId()).toUri();
    return ResponseEntity.created(uri).body(productCreateDTO);
  }
}
