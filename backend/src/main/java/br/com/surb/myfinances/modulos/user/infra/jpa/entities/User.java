package br.com.surb.myfinances.modulos.user.infra.jpa.entities;

import br.com.surb.myfinances.shared.enums.EnumStatus;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "tb_user")
public class User implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String code;
  private String firstName;
  private String lastName;

  private LocalDate birth;

  @Column(unique = true)
  private String cpf;

  @Column(unique = true)
  private String email;

  private String address;

  private String telephone;

  private String password;
  private LocalDate createdAt;

  private LocalDate updatedAt;

  private EnumStatus status;

  public User(){}

  public User(Long id, String code, String firstName, String lastName, LocalDate birth, String cpf, String email,
              String address,
              String telephone,
              String password,
              LocalDate createdAt,
              LocalDate updatedAt, EnumStatus status) {
    this.id = id;
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;
    this.cpf = cpf;
    this.email = email;
    this.address = address;
    this.telephone = telephone;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
  }

  public User(String code, String firstName, String lastName, LocalDate birth, String cpf, String email, String address,
              String telephone,
              String password, EnumStatus status) {
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;
    this.cpf = cpf;
    this.email = email;
    this.address = address;
    this.telephone = telephone;
    this.password = password;
    this.status = status;
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public LocalDate getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDate createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDate getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDate updatedAt) {
    this.updatedAt = updatedAt;
  }

  public EnumStatus getStatus() {
    return status;
  }

  public void setStatus(EnumStatus status) {
    this.status = status;
  }

  @PrePersist
  public void prePersist(){
    setCreatedAt(LocalDate.now());
    status = EnumStatus.ENABLED;
    code = String.valueOf(UUID.randomUUID());
  }

  @PreUpdate
  public void preUpdate(){
    setUpdatedAt(LocalDate.now());
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return id.equals(user.id) && code.equals(user.code) && status == user.status;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, code, status);
  }
}
