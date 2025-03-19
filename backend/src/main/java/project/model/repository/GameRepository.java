package project.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.model.entity.GameEntity;

public interface GameRepository extends JpaRepository<GameEntity, Integer> {
}
