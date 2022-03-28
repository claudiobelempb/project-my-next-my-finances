package br.com.surb.myfinances.modulos.user.usecases.UserDelete;

import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppDataBaseException;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class UserDeleteService {

  private final UserRepository userRepository;

  public UserDeleteService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  public void run(Long id){
    try{
      userRepository.deleteById(id);
    }catch (EmptyResultDataAccessException e) {
      throw new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id);
    }catch (DataIntegrityViolationException e) {
      throw new AppDataBaseException(AppExceptionConstants.INTEGRITY_VIOLATION + id);
    }
  }

}
