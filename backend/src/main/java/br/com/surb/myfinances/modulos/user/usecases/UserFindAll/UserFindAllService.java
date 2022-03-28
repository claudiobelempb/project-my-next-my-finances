package br.com.surb.myfinances.modulos.user.usecases.UserFindAll;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserFindAllService {

  private final UserRepository userRepository;

  public UserFindAllService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Transactional(readOnly = true)
  public Page<UserDTO> run(Pageable pageable){
    Page<User> users = userRepository.findAll(pageable);
    return users.map(user -> new UserDTO(user));
  }
}
