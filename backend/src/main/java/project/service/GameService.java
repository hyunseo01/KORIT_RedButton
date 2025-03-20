package project.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.model.entity.GameEntity;
import project.model.repository.GameRepository;

import java.util.List;

@Service
public class GameService {
    @Autowired
    GameRepository gameRepository;

    @Transactional
    public List<GameEntity> findAll() {
        return gameRepository.findAll();
    }

    @Transactional
    public GameEntity findById(int id) {
        return gameRepository.findById(id).orElse(null);
    }

    @Transactional
    public GameEntity save(GameEntity game) {
        return gameRepository.save(game);
    }

    @Transactional
    public void deleteById(int id) {
        gameRepository.deleteById(id);
    }
}