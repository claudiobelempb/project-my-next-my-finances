package br.com.surb.myfinances.modulos.product.useCases.ProductUpdate;

import br.com.surb.myfinances.modulos.product.dto.ProductUpdateDTO;
import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.modulos.product.infra.jpa.repositories.ProductRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
public class ProductUpdateService {

  private final ProductRepository productRepository;

  public ProductUpdateService(ProductRepository productRepository){
    this.productRepository = productRepository;
  }

  @Transactional
  public ProductUpdateDTO execute(Long id, ProductUpdateDTO productUpdateDTO){
    try{
      Product product = productRepository.getById(id);
      product.setCode(productUpdateDTO.getCode());
      product.setName(productUpdateDTO.getName());
      product.setPrice(productUpdateDTO.getPrice());
      product.setDescription(productUpdateDTO.getDescription());
      product = productRepository.save(product);
      return new ProductUpdateDTO(product);
    }catch (EntityNotFoundException e) {
      throw new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id);
    }
  }
}
