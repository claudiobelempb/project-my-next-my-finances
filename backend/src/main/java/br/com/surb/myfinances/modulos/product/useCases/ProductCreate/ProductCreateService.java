package br.com.surb.myfinances.modulos.product.useCases.ProductCreate;

import br.com.surb.myfinances.modulos.product.dto.ProductCreateDTO;
import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.modulos.product.infra.jpa.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductCreateService {

  private final ProductRepository productRepository;

  public ProductCreateService(ProductRepository productRepository){
    this.productRepository = productRepository;
  }

  @Transactional
  public ProductCreateDTO run(ProductCreateDTO productCreateDTO){
    Product product = new Product();
    product.setCode(productCreateDTO.getCode());
    product.setName(productCreateDTO.getName());
    product.setPrice(productCreateDTO.getPrice());
    product.setDescription(productCreateDTO.getDescription());
    product.setStatus(productCreateDTO.getStatus());

    product = productRepository.save(product);

    return new ProductCreateDTO(product);

  }

}
