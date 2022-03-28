package br.com.surb.myfinances.shared.exeptions.services;

import org.springframework.boot.context.properties.bind.validation.ValidationErrors;

public class AppInvalidRequestException extends RuntimeException {

  private final ValidationErrors validationErrors;

  public AppInvalidRequestException(ValidationErrors validationErrors) {
    super(validationErrors.toString());
    this.validationErrors = validationErrors;
  }

  public ValidationErrors getValidationErrors() {
    return validationErrors;
  }
}