package br.com.surb.myfinances.modulos.product.dto;

import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.shared.enums.EnumStatus;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;

public class ProductDTO implements Serializable {

  private static final long serialVersionUID = 1L;

  private Long id;
  private String code;
  private String name;
  private BigDecimal price;
  private String imgUrl;
  private String description;
  private Instant createdAt;
  private Instant updatedAt;
  private EnumStatus status;

  public ProductDTO(){}

  public ProductDTO(String code, String name, BigDecimal price, String imgUrl, String description, Instant createdAt,
                    Instant updatedAt, EnumStatus status) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
    this.imgUrl = imgUrl;
  }

  public ProductDTO(Product product){
    id = product.getId();
    code = product.getCode();
    name = product.getName();
    price = product.getPrice();
    imgUrl = product.getImgUrl();
    description = product.getDescription();
    createdAt = product.getCreatedAt();
    updatedAt = product.getUpdatedAt();
    status = product.getStatus();
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

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public String getImgUrl() {
    return imgUrl;
  }

  public void setImgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
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
