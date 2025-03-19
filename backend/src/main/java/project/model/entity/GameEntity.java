package project.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Game")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameno; //pk 게임 넘버

    @Column(nullable = false)
    private String image; //url

    @Column(nullable = false)
    private String koname; //게임한글

    @Column(nullable = false)
    private String enname; //게임영어

    @Column(nullable = false)
    private String info1; //상세1

    @Column(nullable = false)
    private String info2; //상세2

    @Column(nullable = false)
    private String level; //난이도

    @Column(nullable = false)
    private String player; //플레이어수

    @Column(nullable = false)
    private String time; //시간

    @Column(nullable = false)
    private String age; //종류

    @Column(nullable = false)
    private String category; //카테고리
}
