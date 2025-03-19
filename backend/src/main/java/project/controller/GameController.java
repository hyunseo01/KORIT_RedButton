package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.model.entity.GameEntity;
import project.model.entity.MenuEntity;
import project.service.GameService;
import project.service.MenuService;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private GameService gameService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findall.do")
    public List<GameEntity> findAll() {
        return gameService.findAll();
    }
}
