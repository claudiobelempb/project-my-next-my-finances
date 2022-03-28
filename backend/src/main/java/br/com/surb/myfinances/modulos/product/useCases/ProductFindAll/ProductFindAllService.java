package br.com.surb.myfinances.modulos.product.useCases.ProductFindAll;

import br.com.surb.myfinances.modulos.product.dto.ProductDTO;
import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.modulos.product.infra.jpa.repositories.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductFindAllService {

  private final ProductRepository productRepository;

  public ProductFindAllService(ProductRepository productRepository){
    this.productRepository = productRepository;
  }

  public Page<ProductDTO> execute(Pageable pageable){
    Page<Product> products = productRepository.findAll(pageable);
    return products.map(product -> new ProductDTO(product));
  }
}
