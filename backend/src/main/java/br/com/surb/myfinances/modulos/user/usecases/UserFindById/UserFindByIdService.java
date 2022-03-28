package br.com.surb.myfinances.modulos.user.usecases.UserFindById;

import static br.com.surb.myfinances.shared.constants.AppExceptionConstants.ENTITY_NOT_FOUND;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserFindByIdService {

  private final UserRepository userRepository;

  public UserFindByIdService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Transactional(readOnly = true)
  public UserDTO run(Long id) {

    Optional<User> obj = userRepository.findById(id);
    User user = obj.orElseThrow(() -> new AppEntityNotFoundException(ENTITY_NOT_FOUND + id));
    return new UserDTO(user);
  }
}
