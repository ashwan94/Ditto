package kr.or.nextit.ditto.freeboard;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;

@Data // Lombok을 사용하여 getter, setter, toString, equals, hashCode 메서드를 자동으로 생성
public class FreeBoardVO {
    private int freeBoardNo; // 게시판 번호
    private String memberId; // 회원 ID
    private String freeTitle; // 게시물 제목
    private String freeContent; // 게시물 내용
    private int hits; // 조회수
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp createDate; // 등록 시간
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp modifyDate; // 수정 시간
    private String status; // Y : 활성화, N : 비활성화
    private String type;    // 게시판 종류
}
