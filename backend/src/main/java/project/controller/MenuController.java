package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public MenuEntity findById(@PathVariable int id) {
        return menuService.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public MenuEntity create(@RequestBody MenuEntity menu) {
        return menuService.save(menu);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{id}")
    public MenuEntity update(@PathVariable int id, @RequestBody MenuEntity menu) {
        MenuEntity existingMenu = menuService.findById(id);
        if (existingMenu != null) {
            existingMenu.setImage(menu.getImage());
            existingMenu.setKoname(menu.getKoname());
            existingMenu.setEnname(menu.getEnname());
            existingMenu.setInfo(menu.getInfo());
            existingMenu.setAllergy(menu.getAllergy());
            existingMenu.setDrinktype(menu.getDrinktype());
            return menuService.save(existingMenu);
        } else {
            return null;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        menuService.deleteById(id);
    }
}