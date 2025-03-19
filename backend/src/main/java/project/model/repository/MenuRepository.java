package project.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.model.entity.MenuEntity;

public interface MenuRepository extends JpaRepository<MenuEntity, Integer> {
}
