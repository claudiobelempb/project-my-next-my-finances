package br.com.surb.myfinances.modulos.product.useCases.ProductDelete;

import br.com.surb.myfinances.modulos.product.infra.jpa.repositories.ProductRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppDataBaseException;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class ProductDeleteService {

  private final ProductRepository productRepository;

  public ProductDeleteService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }
  public void execute(Long id) {
    try{
      productRepository.deleteById(id);
    }catch (EmptyResultDataAccessException e){
      throw new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id);
    }catch (DataIntegrityViolationException e){
      throw new AppDataBaseException(AppExceptionConstants.INTEGRITY_VIOLATION);
    }
  }
}
