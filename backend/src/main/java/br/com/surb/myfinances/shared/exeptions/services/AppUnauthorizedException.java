package br.com.surb.myfinances.shared.exeptions.services;

import java.io.Serial;
import java.io.Serializable;

public class AppUnauthorizedException extends RuntimeException implements Serializable {

  @Serial
  private static final long serialVersionUID = 1L;

  public AppUnauthorizedException(String msg) {
    super(msg);
  }
}