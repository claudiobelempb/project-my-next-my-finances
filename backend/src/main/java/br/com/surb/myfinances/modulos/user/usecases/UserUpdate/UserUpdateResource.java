package br.com.surb.myfinances.modulos.user.usecases.UserUpdate;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import br.com.surb.myfinances.modulos.user.dto.UserUpdateDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users")
public class UserUpdateResource {

  private final UserUpdateService userUpdateService;

  public UserUpdateResource(UserUpdateService userUpdateService){
    this.userUpdateService = userUpdateService;
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<UserDTO> handle(@PathVariable Long id, @RequestBody UserUpdateDTO userUpdateDTO) {
    UserDTO userDTO = userUpdateService.run(id, userUpdateDTO);
    return ResponseEntity.ok().body(userDTO);
  }
}
