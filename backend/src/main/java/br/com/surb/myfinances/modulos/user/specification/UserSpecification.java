package br.com.surb.myfinances.modulos.user.specification;

import br.com.surb.myfinances.modulos.user.filter.UserFilter;
import br.com.surb.myfinances.modulos.user.infra.jpa.entities.User;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserSpecification {

  public UserSpecification(){}

  public Specification<User> users(UserFilter filter) {
    return (root, query, criteriaBuilder) -> {
      List<Predicate> predicateList = new ArrayList<>();

      if (!ObjectUtils.isEmpty(filter.getFirstName())) {
        predicateList.add(
          criteriaBuilder.like(
            criteriaBuilder.upper(root.get("firstName")), filter.getFirstName().toUpperCase().concat("%")
          )
        );
      }

      if (!ObjectUtils.isEmpty(filter.getEmail())) {
        predicateList.add(
          criteriaBuilder.like(
            criteriaBuilder.lower(root.get("email")), filter.getEmail().toLowerCase().concat("%")
          )
        );
      }

      if (!ObjectUtils.isEmpty(filter.getCpf())) {
        predicateList.add(
          criteriaBuilder.like(
            criteriaBuilder.lower(root.get("cpf")), filter.getCpf().toLowerCase().concat("%")
          )
        );
      }

      if (!ObjectUtils.isEmpty(filter.getStatus())) {
        predicateList.add(
          criteriaBuilder.equal(root.get("status"), filter.getStatus())
        );
      }

      if (!ObjectUtils.isEmpty(filter.getCreatedAt())) {
        predicateList.add(
          criteriaBuilder.greaterThanOrEqualTo(root.get("createdAt"), filter.getCreatedAt())
        );
      }

      if (!ObjectUtils.isEmpty(filter.getUpdatedAt())) {
        predicateList.add(
          criteriaBuilder.lessThanOrEqualTo(root.get("updateAt"), filter.getUpdatedAt())
        );
      }

      if (!ObjectUtils.isEmpty(filter.getBirth())) {
        predicateList.add(
          criteriaBuilder.greaterThanOrEqualTo(root.get("birthday"), filter.getBirth())
        );
      }

      if (!ObjectUtils.isEmpty(filter.getBirth())) {
        predicateList.add(
          criteriaBuilder.lessThanOrEqualTo(root.get("birthday"), filter.getBirth())
        );
      }

      return criteriaBuilder.and(predicateList.toArray(Predicate[]::new));
    };
  }
}
