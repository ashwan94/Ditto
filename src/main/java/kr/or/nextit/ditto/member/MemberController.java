package kr.or.nextit.ditto.member;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService service;
    private DefaultMessageService messageService;


    // 로그인
    @GetMapping("/SignIn")
    public String SignIn() {
        return "true";
    }

    // 로그인
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

    // 마이페이지 회원정보 조회
    @PostMapping("/searchMemberInfo")
    public MemberVO searchMemberInfo(@RequestBody Map<String, String> payload){
        String memberId = payload.get("memberId");
        MemberVO member = service.searchMemberInfo(memberId);
        System.out.println("회원 아이디" + memberId);
        System.out.println("회원 정보 ======>" +member);
        return member;
    }

    // 비밀번호 수정
    @PostMapping("/passwordChange")
    public void passwordChange(@RequestBody MemberVO post){
        service.passwordChange(post); // 기존 게시물을 수정
    }

    // 마이페이지 닉네임 중복체크
    @PostMapping("/checkNick")
    public int checkNick(@RequestBody MemberVO memberVO) {
        System.out.println("==>" + memberVO);
        // 닉네임 중복
        int checkNickname = service.checkNicknameIsDuplicated(memberVO.getMemberNickname());
        System.out.println("닉네임 중복되는가? : " + checkNickname);
        // 0 = 사용가능한 아이디나 닉네임
        return checkNickname;
    }

    // 마이페이지 회원정보 수정
    @PutMapping("/changeMemberData")
    public void updateMember(@RequestBody MemberVO post){
        service.updateMemberData(post);
    }


    // 회원가입
    @PostMapping("/register")
    public void SignUp(MemberVO memberVO) {
        System.out.println("==>");
        System.out.println("파라미터: " + memberVO);

        int result = service.signUp(memberVO);

        System.out.println("result " + result);
    }

    // 아이디 중복체크
    @PostMapping("/checkId")
    public int checkId(@RequestBody MemberVO memberVO) {
        System.out.println("==>" + memberVO);

        // 아이디 중복
        int checkId = service.checkIdIsDuplicated(memberVO.getMemberId());
        System.out.println("아이디 중복되는가? : " + checkId);
        return checkId;
    }

    // 닉네임 중복체크
    @PostMapping("/checkNickname")
    public int checkNickname(MemberVO memberVO) {
        System.out.println("==>" + memberVO);

        // 닉네임 중복
        int checkNickname = service.checkNicknameIsDuplicated(memberVO.getMemberNickname());
        System.out.println("닉네임 중복되는가? : " + checkNickname);
        // 0 = 사용가능한 아이디나 닉네임

        return checkNickname;
    }

    /**
     * 단일 메시지 발송 예제 - 공식 홈페이지
     */
    @PostMapping("/sendOne")
    public String sendOne(String memberTel) {
        Message message = new Message();
        this.messageService = NurigoApp.INSTANCE.initialize("NCSFSLKFU5JQF16Z", "4L0VM1ASNF9CSLSZDMWLNQLDZXSGYG7B", "https://api.coolsms.co.kr");
        // 발신번호 및 수신번호는 반드시 01012345678 형태로 입력되어야 합니다.

        // verificationCode => 인증번호 5자리
        String verificationCode = String.valueOf((int)(Math.random() * (99999 - 10000 + 1)) + 10000);
        message.setFrom("01047959464");
        message.setTo(memberTel);
        message.setText("[한석줍쇼 인증코드]" + verificationCode);

        System.out.println(message);
        messageService.sendOne(new SingleMessageSendingRequest(message));
//        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
//        System.out.println(response);

        return verificationCode;
    }



}
