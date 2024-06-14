package kr.or.nextit.ditto.freeboard;

import lombok.Data;
import java.sql.Timestamp;

@Data // Lombok을 사용하여 getter, setter, toString, equals, hashCode 메서드를 자동으로 생성합니다.
public class FreeBoardVO {
    private int freeBoardNo; // 게시판 번호
    private String memberId; // 회원 ID
    private String freeTitle; // 게시물 제목
    private String freeContent; // 게시물 내용
    private int hits; // 조회수
    private Timestamp registerTime; // 등록 시간
    private Timestamp modifyTime; // 수정 시간
    private String status; // 상태 (예: Y/N)
}
