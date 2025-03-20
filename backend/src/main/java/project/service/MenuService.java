package project.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.model.entity.MenuEntity;
import project.model.repository.MenuRepository;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    MenuRepository menuRepository;

    @Transactional
    public List<MenuEntity> findAll() {
        return menuRepository.findAll();
    }

    @Transactional
    public MenuEntity findById(int id) {
        return menuRepository.findById(id).orElse(null);
    }

    @Transactional
    public MenuEntity save(MenuEntity menu) {
        return menuRepository.save(menu);
    }

    @Transactional
    public void deleteById(int id) {
        menuRepository.deleteById(id);
    }
}