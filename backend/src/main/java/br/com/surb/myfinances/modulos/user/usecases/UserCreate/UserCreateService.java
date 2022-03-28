package br.com.surb.myfinances.modulos.user.usecases.UserCreate;

import br.com.surb.myfinances.modulos.user.dto.UserCreateDTO;
import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserCreateService {

  private final UserRepository userRepository;

  public UserCreateService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Transactional
  public UserDTO run(UserCreateDTO userCreateDTO){
    User user = new User();
    copyDtoToUser(userCreateDTO, user);
    user.setPassword(userCreateDTO.getPassword());
    user = userRepository.save(user);
    return new UserDTO(user);
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
