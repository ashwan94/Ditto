package kr.or.nextit.ditto.freeboard;

import java.sql.Timestamp;

public class FreeBoardVO {
    private int freeBoardNo; // 자유게시판 번호
    private String memberId; // 회원 ID
    private String freeTitle; // 게시글 제목
    private String freeContent; // 게시글 내용
    private int hits; // 조회수
    private Timestamp registerTime; // 등록 시간
    private Timestamp modifyTime; // 수정 시간
    private String status; // 상태 (Y: 활성, N: 비활성)

    // Getters and Setters
}
