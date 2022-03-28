package br.com.surb.myfinances.modulos.user.dto;

import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import br.com.surb.myfinances.shared.enums.EnumStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

public class UserDTO {
  private Long id;
  private String code;
  private String firstName;
  private String lastName;
  @JsonFormat(pattern = "dd/MM/yyyy")
  private LocalDate birth;
  private String cpf;
  private String email;
  private String address;
  private String telephone;
  private Instant createdAt;
  private Instant updatedAt;
  private EnumStatus status;

  public UserDTO(){}

  public UserDTO(Long id, String code, String firstName, LocalDate birth, String lastName, String cpf, String email,
                 String address,
                 String telephone, Instant createdAt, Instant updatedAt, EnumStatus status) {
    this.id = id;
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;
    this.cpf = cpf;
    this.email = email;
    this.address = address;
    this.telephone = telephone;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
  }

  public UserDTO(User user){
    id = user.getId();
    code = user.getCode();
    firstName = user.getFirstName();
    lastName = user.getLastName();
    birth = user.getBirth();
    cpf = user.getCpf();
    email = user.getEmail();
    address = user.getAddress();
    telephone = user.getTelephone();
    createdAt = user.getCreatedAt();
    updatedAt = user.getUpdatedAt();
    status = user.getStatus();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public LocalDate getBirth() {
    return birth;
  }

  public void setBirth(LocalDate birth) {
    this.birth = birth;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getTelephone() {
    return telephone;
  }

  public void setTelephone(String telephone) {
    this.telephone = telephone;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Instant createdAt) {
    this.createdAt = createdAt;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(Instant updatedAt) {
    this.updatedAt = updatedAt;
  }

  public EnumStatus getStatus() {
    return status;
  }

  public void setStatus(EnumStatus status) {
    this.status = status;
  }
}
