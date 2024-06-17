package kr.or.nextit.ditto.member;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MemberVO {
    private String id;
    private String name;
    private String nickname;
    private String password;
    private String tel;
    private String address;
    private String birth;
    private LocalDateTime createDate;
    private LocalDateTime modifyDate;



}
