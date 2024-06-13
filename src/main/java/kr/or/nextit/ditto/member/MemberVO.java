package kr.or.nextit.ditto.member;

import lombok.Data;

import java.util.Date;

// MemberVO.java
@Data // Lombok을 사용하여 getter, setter 등을 자동 생성
public class MemberVO {
    private int memberNo; // 멤버 번호
    private String memberId; // 멤버 ID
    private String memberName; // 멤버 이름
    private String memberNickname; // 멤버 닉네임
    private String memberPw; // 멤버 비밀번호
    private String memberSub; // 멤버 구독 여부
    private String memberTel; // 멤버 전화번호
    private String memberAdd; // 멤버 주소
    private Date memberBirth; // 멤버 생년월일
    private String memberCard; // 멤버 카드 정보
    private String memberAdmin; // 멤버 권한
    private String memberLog; // 멤버 로그인 여부
    private String memberDelete; // 멤버 삭제 여부
}
