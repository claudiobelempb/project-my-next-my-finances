package br.com.surb.myfinances.modulos.user.usecases.UserSearch;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.filter.UserFilter;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.modulos.user.infra.jpa.repositories.UserRepository;
import br.com.surb.myfinances.modulos.user.specification.UserSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserSearchService {

  @Autowired
  private UserRepository repository;

  @Autowired
  private UserSpecification specification;

  @Transactional(readOnly = true)
  public Page<UserDTO> execute(UserFilter filter, Pageable pageable){
    Page<User> entity = repository.findAll(specification.users(filter), pageable);
    return entity.map(dto -> new UserDTO(dto));
  }
}
