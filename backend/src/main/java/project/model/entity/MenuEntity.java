package project.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Menu")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int menuno; //pk 메뉴 넘버

    @Column(nullable = false)
    private String image; //url

    @Column(nullable = false)
    private String koname; //메뉴한글

    @Column(nullable = false)
    private String enname; //메뉴영어

    @Column(nullable = false)
    private String info; //상세

    @Column(nullable = false)
    private String allergy; //알러지
    
    @Column(nullable = false)
    private String drinktype; //음료 타입
}
