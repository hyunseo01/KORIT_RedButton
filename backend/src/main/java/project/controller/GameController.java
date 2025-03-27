package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.model.entity.GameEntity;
import project.service.GameService;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired private GameService gameService;

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/findall.do")
    public List<GameEntity> findAll() {
        return gameService.findAll();
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/{id}")
    public GameEntity findById(@PathVariable int id) {
        return gameService.findById(id);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @PostMapping("/create")
    public GameEntity create(@RequestBody GameEntity game) {
        return gameService.save(game);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @PutMapping("/update/{id}")
    public GameEntity update(@PathVariable int id, @RequestBody GameEntity game) {
        GameEntity existingGame = gameService.findById(id);
        if (existingGame != null) {
            existingGame.setImage(game.getImage());
            existingGame.setKoname(game.getKoname());
            existingGame.setEnname(game.getEnname());
            existingGame.setInfo1(game.getInfo1());
            existingGame.setInfo2(game.getInfo2());
            existingGame.setLevel(game.getLevel());
            existingGame.setPlayer(game.getPlayer());
            existingGame.setTime(game.getTime());
            existingGame.setAge(game.getAge());
            existingGame.setCategory(game.getCategory());
            return gameService.save(existingGame);
        } else {
            return null;
        }
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        gameService.deleteById(id);
    }
}