package br.com.surb.myfinances.modulos.user.usecases.UserFindById;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserFindByIdResource {

  private final UserFindByIdService userFindByIdService;

  public UserFindByIdResource(UserFindByIdService userFindByIdService){
    this.userFindByIdService = userFindByIdService;
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<UserDTO> handle(@PathVariable Long id) {
    UserDTO userDTO = userFindByIdService.run(id);
    return ResponseEntity.ok().body(userDTO);
  }
}
