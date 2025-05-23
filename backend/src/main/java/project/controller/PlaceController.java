package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.model.entity.PlaceEntity;
import project.service.PlaceService;

import java.util.List;

@RestController
@RequestMapping("/place")
public class PlaceController {
    @Autowired private PlaceService placeService;

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/findall.do")
    public List<PlaceEntity> findAll() {
        return placeService.findAll();
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @GetMapping("/{id}")
    public PlaceEntity findById(@PathVariable int id) {
        return placeService.findById(id);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @PostMapping("/create")
    public PlaceEntity create(@RequestBody PlaceEntity place) {
        return placeService.save(place);
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @PutMapping("/update/{id}")
    public PlaceEntity update(@PathVariable int id, @RequestBody PlaceEntity place) {
        PlaceEntity existingPlace = placeService.findById(id);
        if (existingPlace != null) {
            existingPlace.setName(place.getName());
            existingPlace.setImage(place.getImage());
            existingPlace.setAddress(place.getAddress());
            existingPlace.setPhone(place.getPhone());
            existingPlace.setLatitude(place.getLatitude());
            existingPlace.setLongitude(place.getLongitude());
            existingPlace.setTime(place.getTime());
            existingPlace.setService(place.getService());
            return placeService.save(existingPlace);
        } else {
            return null;
        }
    }

    @CrossOrigin(origins = "https://korit-red-button-63s7.vercel.app/")
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        placeService.deleteById(id);
    }
}