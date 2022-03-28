package br.com.surb.myfinances.modulos.user.usecases.UserCreate;

import br.com.surb.myfinances.modulos.user.dto.UserCreateDTO;
import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/api/users")
public class UserCreateResource {

  private final UserCreateService userCreateService;

  public UserCreateResource(UserCreateService userCreateService){
    this.userCreateService = userCreateService;
  }

  @PostMapping
  public ResponseEntity<UserDTO> handle(@RequestBody UserCreateDTO userCreateDTO) {
    UserDTO userDTO = userCreateService.run(userCreateDTO);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(userDTO.getId()).toUri();
    return ResponseEntity.created(uri).body(userDTO);
  }
}
