package kr.or.nextit.ditto.member;


import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService service;

    @GetMapping("/SignIn")
    public String SignIn() {
        return "true";
    }

    @PostMapping("/SignIn")
    public MemberVO findMember(MemberVO memberVO) {
        System.out.println("==>");
        // 파라미터로 들어온 갑 확인
        System.out.println("파라미터 : " + memberVO);

        // DB 회원과 비교
        MemberVO member = service.findMember(memberVO);
        System.out.println("쿼리 결과 확인용, DB와 비교 조회 : " + member);
        return member;

    }

    @GetMapping("/SignUp")
    public String SignUp() {
        return "true";
    }

    @PostMapping("/checkId")
    public int checkId(@RequestBody MemberVO memberVO) {
        System.out.println("==>"+ memberVO);

        // 아이디 중복
        int checkId = service.checkIdIsDuplicated(memberVO.getMemberId());
        System.out.println("아이디 중복되는가? : "+ checkId);
        return checkId;
    }


    @PostMapping("/checkNickname")
    public int checkNickname(MemberVO memberVO) {
        System.out.println("==>"+ memberVO);

        // 닉네임 중복
        int checkNickname = service.checkNicknameIsDuplicated(memberVO.getMemberNickname());
        System.out.println("닉네임 중복되는가? : "+ checkNickname);
        // 0 = 사용가능한 아이디나 닉네임

        return checkNickname;
    }


}
