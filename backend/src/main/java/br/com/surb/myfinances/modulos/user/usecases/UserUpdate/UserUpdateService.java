package br.com.surb.myfinances.modulos.user.usecases.UserUpdate;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.dto.UserUpdateDTO;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import br.com.surb.myfinances.shared.constants.AppExceptionConstants;
import br.com.surb.myfinances.shared.exeptions.services.AppEntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
public class UserUpdateService {

  private final UserRepository userRepository;

  public UserUpdateService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Transactional
  public UserDTO run(Long id, UserUpdateDTO userUpdateDTO){
    try{
      User user = userRepository.getById(id);
      copyDtoToUser(userUpdateDTO, user);
      user = userRepository.save(user);
      return new UserDTO(user);
    }catch (EntityNotFoundException e){
      throw new AppEntityNotFoundException(AppExceptionConstants.ENTITY_NOT_FOUND + id);
    }
  }

  private void copyDtoToUser(UserDTO userDTO, User user) {
    user.setFirstName(userDTO.getFirstName());
    user.setLastName(userDTO.getLastName());
    user.setBirth(userDTO.getBirth());
    user.setEmail(userDTO.getEmail());
    user.setCpf(userDTO.getCpf());
    user.setTelephone(userDTO.getTelephone());
    user.setAddress(userDTO.getAddress());
  }

}
