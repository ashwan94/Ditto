package kr.or.nextit.ditto.member;


import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

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
    public MemberVO login(MemberVO memberVO) {
        System.out.println("==>");
        System.out.println(memberVO);
//        MemberVO member = service.findMember(memberVO);

        return memberVO;
        // 로그인 실패 시 현재 페이지 유지
//        if (member == null) {
//          return "redirect:/SignIn";
//        }
//
//        // 로그인 성공 시 메인화면으로 이동
//        session.setAttribute("member", member);
//        return "redirect:/";
    }
}
