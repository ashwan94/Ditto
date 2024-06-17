package kr.or.nextit.ditto.member;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class LoginRequest {
    private String memberId;
    private String memberPW;




}
