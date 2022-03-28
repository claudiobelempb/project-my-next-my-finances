package br.com.surb.myfinances.modulos.product.useCases.ProductFinfById;

import br.com.surb.myfinances.modulos.product.dto.ProductDTO;
import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.modulos.product.infra.jpa.repositories.ProductRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductFindByIdService {

  private final ProductRepository productRepository;

  public ProductFindByIdService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @Transactional(readOnly = true)
  public ProductDTO execute(Long id){
    Optional<Product> obj = productRepository.findById(id);
    Product product =
      obj.orElseThrow(() -> new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id));
    return new ProductDTO(product);
  }
}
