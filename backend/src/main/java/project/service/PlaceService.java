package project.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.model.entity.PlaceEntity;
import project.model.repository.PlaceRepository;

import java.util.List;

@Service
public class PlaceService {
    @Autowired
    PlaceRepository placeRepository;

    @Transactional
    public List<PlaceEntity> findAll() {
        return placeRepository.findAll();
    }

    @Transactional
    public PlaceEntity findById(int id) {
        return placeRepository.findById(id).orElse(null);
    }

    @Transactional
    public PlaceEntity save(PlaceEntity place) {
        return placeRepository.save(place);
    }

    @Transactional
    public void deleteById(int id) {
        placeRepository.deleteById(id);
    }
}