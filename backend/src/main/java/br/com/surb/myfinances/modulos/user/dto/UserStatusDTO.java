package br.com.surb.myfinances.modulos.user.dto;

import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.shared.enums.EnumStatus;

public class UserStatusDTO extends UserDTO {

  private static final long serialVersionUID = 1L;

  private EnumStatus status;

  public UserStatusDTO(){
    super();
  }

  public UserStatusDTO(User user){
    super();
  }

  public EnumStatus getStatus() {
    return status;
  }

  public void setStatus(EnumStatus status) {
    this.status = status;
  }
}
