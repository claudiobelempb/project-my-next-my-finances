package br.com.surb.myfinances.modulos.user.usecases.UserStatus;

import br.com.surb.myfinances.modulos.user.dto.UserStatusDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users")
public class UserStatusResource {

  private final UserStatusService userStatusService;

  public UserStatusResource(UserStatusService userStatusService){
    this.userStatusService = userStatusService;
  }

  @PatchMapping(value = "/status/{id}")
  public ResponseEntity<Void> handle(@PathVariable Long id, @RequestBody UserStatusDTO userStatusDTO) {
    userStatusService.execute(id, userStatusDTO);
    return ResponseEntity.noContent().build();
  }
}
