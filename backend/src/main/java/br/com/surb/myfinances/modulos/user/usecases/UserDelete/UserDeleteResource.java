package br.com.surb.myfinances.modulos.user.usecases.UserDelete;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserDeleteResource {

  private final UserDeleteService userDeleteService;

  public UserDeleteResource( UserDeleteService userDeleteService){
    this.userDeleteService = userDeleteService;
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<Void> handle(@PathVariable Long id){
    userDeleteService.run(id);
    return ResponseEntity.noContent().build();
  }
}
