package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.model.entity.MenuEntity;
import project.service.MenuService;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @Autowired private MenuService menuService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findall.do")
    public List<MenuEntity> findAll() {
        return menuService.findAll();
    }
}
