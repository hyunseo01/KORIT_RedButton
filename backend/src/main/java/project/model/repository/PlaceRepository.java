package project.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.model.entity.PlaceEntity;

public interface PlaceRepository extends JpaRepository<PlaceEntity, Integer> {
}
