package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.model.entity.PlaceEntity;
import project.service.PlaceService;

import java.util.List;

@RestController
@RequestMapping("/place")
public class PlaceController {
    @Autowired private PlaceService placeService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findall.do")
    public List<PlaceEntity> findAll() {
        return placeService.findAll();
    }
}
