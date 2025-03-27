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

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/findall.do")
    public List<MenuEntity> findAll() {
        return menuService.findAll();
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/{id}")
    public MenuEntity findById(@PathVariable int id) {
        return menuService.findById(id);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @PostMapping("/create")
    public MenuEntity create(@RequestBody MenuEntity menu) {
        return menuService.save(menu);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
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

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        menuService.deleteById(id);
    }
}