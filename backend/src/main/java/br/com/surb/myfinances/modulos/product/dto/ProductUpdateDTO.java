package br.com.surb.myfinances.modulos.product.dto;

import br.com.surb.myfinances.modulos.product.infra.jpa.entities.Product;
import br.com.surb.myfinances.shared.enums.EnumStatus;

import java.io.Serial;
import java.math.BigDecimal;
import java.time.Instant;

public class ProductUpdateDTO extends ProductDTO {

  @Serial
  private static final long serialVersionUID = 1L;

  public ProductUpdateDTO(){
    super();
  }

  public ProductUpdateDTO(String code, String name, BigDecimal price, String imgUrl, String description,
                          Instant createdAt,
                          Instant updatedAt, EnumStatus status) {
    super(code, name, price, imgUrl, description, createdAt, updatedAt, status);
  }

  public ProductUpdateDTO(Product product) {
    super(product);
  }
}
