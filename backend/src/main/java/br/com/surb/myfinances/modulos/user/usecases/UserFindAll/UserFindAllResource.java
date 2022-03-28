package br.com.surb.myfinances.modulos.user.usecases.UserFindAll;

import br.com.surb.myfinances.modulos.user.dto.UserDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserFindAllResource {

  private final UserFindAllService userFindAllService;

  public UserFindAllResource(UserFindAllService userFindAllService){
    this.userFindAllService = userFindAllService;
  }

  @GetMapping
  public ResponseEntity<Page<UserDTO>> handle(Pageable pageable){
    Page<UserDTO> dto = userFindAllService.run(pageable);
    return ResponseEntity.ok().body(dto);
  }
}
