package kr.or.nextit.ditto.member;

import jakarta.mail.Message;
import lombok.RequiredArgsConstructor;
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.JSONObject;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.Map;

import static org.apache.hc.client5.http.impl.classic.HttpClients.*;

@Service
@RequiredArgsConstructor
public class MemberService
{
    private final MemberMapper mapper;

    public MemberVO findMember(MemberVO memberVO) {
        return mapper.findMember(memberVO);
    }

    public int checkIdIsDuplicated(String memberId) {
        return mapper.checkIdIsDuplicated(memberId);
    }

    public int checkNicknameIsDuplicated(String memberNickname) {
        return mapper.checkNicknameIsDuplicated(memberNickname);
    }


    //회원가입 시 본인 인증
    public void certifiedPhoneNumber(String u_phone, String cerNum) {
        String api_key = "NCSFSLKFU5JQF16Z";
        String api_secret = "4L0VM1ASNF9CSLSZDMWLNQLDZXSGYG7B";
        String url = "https://api.coolsms.co.kr/sms/2/send";

        Map<String, String> params = new HashMap<>();
        params.put("api_key", api_key);
        params.put("api_secret", api_secret);
        params.put("to", u_phone);
        params.put("from", "010-4795-9464");
        params.put("type", "SMS");
        params.put("text", "[BitMovie] 문자 본인인증 서비스 : 인증번호는 [" + cerNum + "] 입니다.");
        params.put("app_version", "test app 1.2");

        JSONObject json = new JSONObject(params);

        try (CloseableHttpClient client = createDefault()) {
            HttpPost post = new HttpPost(url);
            post.setEntity(new StringEntity(json.toString(), ContentType.APPLICATION_JSON));
            try (CloseableHttpResponse response = client.execute(post)) {
                String responseBody = new String(response.getEntity().getContent().readAllBytes());
                JSONObject responseJson = new JSONObject(responseBody);
                System.out.println(responseJson.toString());
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}