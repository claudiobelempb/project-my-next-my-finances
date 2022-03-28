package br.com.surb.myfinances.modulos.product.dto;

import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.shared.enums.EnumStatus;

import java.math.BigDecimal;
import java.time.Instant;

public class ProductCreateDTO extends ProductDTO {

  private static final long serialVersionUID = 1L;

  public ProductCreateDTO(){
    super();
  }

  public ProductCreateDTO(String code, String name, BigDecimal price, String imgUrl, String description,
                          Instant createdAt,
                          Instant updatedAt, EnumStatus status) {
    super(code, name, price, imgUrl, description, createdAt, updatedAt, status);
  }

  public ProductCreateDTO(Product product) {
    super(product);
  }
}
