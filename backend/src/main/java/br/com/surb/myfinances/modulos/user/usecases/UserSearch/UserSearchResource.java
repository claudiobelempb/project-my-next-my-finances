package br.com.surb.myfinances.modulos.user.usecases.UserSearch;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.filter.UserFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserSearchResource {

  @Autowired
  private UserSearchService service;

  @GetMapping(value = "/search")
  public ResponseEntity<Page<UserDTO>> handle(UserFilter filter, Pageable pageable)
  {
    /*PARAMETRISE: page, size, direction, sort*/
    Page<UserDTO> dto = service.execute(filter, pageable);
    return ResponseEntity.ok().body(dto);
  }
}
