package project.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Place")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlaceEntity {
    //이름 사진 주소 전화번호 위도 경도 시간 서비스
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int placeno; //pk 지점 넘버
    
    @Column(nullable = false)
    private String name; //지점 이름
    
    @Column(nullable = false)
    private String image; //url
    
    @Column(nullable = false) 
    private String address; //주소
    
    @Column(nullable = false)
    private String phone; //전화번호
    
    @Column(nullable = false)
    private String latitude; //위도
    
    @Column(nullable = false)
    private String longitude; //경도
    
    @Column(nullable = false)
    private String time; //시간
    
    @Column(nullable = false)
    private String service; //서비스
}
