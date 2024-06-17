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
}
