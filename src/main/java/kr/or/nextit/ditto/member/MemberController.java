package kr.or.nextit.ditto.member;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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


    // 회원가입
    @GetMapping("/SignUp")
    public String SignUp() {
        return "true";
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
        String verificationCode = String.valueOf(Math.random()*999999);
        message.setFrom("01047959464");
        message.setTo(memberTel);
        message.setText("[한석줍쇼 인증코드]" + verificationCode);

        System.out.println(message);
        messageService.sendOne(new SingleMessageSendingRequest(message));
        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
        System.out.println(response);

        return verificationCode;
    }


//    회원가입 시 본인 인증 문자 서비스
//     https://code-jm.tistory.com/10 참고 코드
//    @GetMapping("/sendSMS")
//    public String sendSMS(@RequestParam String memberTel) {
//        Random rnd = new Random();
//        StringBuffer buffer = new StringBuffer();
//        for (int i = 0; i < 4; i++) {
//            buffer.append(rnd.nextInt(10));
//        }
//        String cerNum = buffer.toString();
//        System.out.println("수신자 번호 : " + memberTel);
//        System.out.println("인증번호 : " + cerNum);
//        service.certifiedPhoneNumber(memberTel, cerNum);
//        return cerNum;
//    }


    // 단일 메시지 발송 예제
//    @GetMapping("/sendSMS")
//    public String sendOne(String memberTel) {
//        DefaultMessageService messageService = NurigoApp.INSTANCE.initialize("NCSFSLKFU5JQF16Z", "4L0VM1ASNF9CSLSZDMWLNQLDZXSGYG7B", "https://api.coolsms.co.kr");
//        Message message = new Message();
//        message.setFrom("01047959464");
//        message.setTo(memberTel);
//        String verificationCode = String.valueOf(Math.random()*999999);
//        message.setText("[한석줍쇼 인증코드]" + verificationCode);
//
//        try {
//            // send 메소드로 ArrayList<Message> 객체를 넣어도 동작합니다!
//            messageService.send(message);
//        } catch (NurigoMessageNotReceivedException exception) {
//            // 발송에 실패한 메시지 목록을 확인할 수 있습니다!
//            System.out.println(exception.getFailedMessageList());
//            System.out.println(exception.getMessage());
//        } catch (Exception exception) {
//            System.out.println(exception.getMessage());
//        }
//        return verificationCode;
//    }


}
