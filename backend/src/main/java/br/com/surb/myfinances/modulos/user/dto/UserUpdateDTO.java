package br.com.surb.myfinances.modulos.user.dto;

import java.io.Serializable;

public class UserUpdateDTO extends UserDTO implements Serializable {

  private static final long serialVersionUID = 1L;

  private String password;

  public UserUpdateDTO(){
    super();
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
