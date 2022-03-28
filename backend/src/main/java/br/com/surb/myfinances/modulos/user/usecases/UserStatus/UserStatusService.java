package br.com.surb.myfinances.modulos.user.usecases.UserStatus;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.dto.UserStatusDTO;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
public class UserStatusService {

  private final UserRepository userRepository;

  public UserStatusService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Transactional
  public void execute(Long id, UserStatusDTO userStatusDTO) {
    try{
      User user = userRepository.getById(id);
      user.setStatus(userStatusDTO.getStatus());
      userRepository.save(user);
    }catch (EntityNotFoundException e) {
      throw new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id);
    }
  }
}
