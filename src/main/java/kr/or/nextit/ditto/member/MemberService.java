package kr.or.nextit.ditto.member;


import lombok.RequiredArgsConstructor;

import net.nurigo.sdk.message.model.Message;
import org.springframework.stereotype.Service;
import java.util.HashMap;



@Service
@RequiredArgsConstructor
public class MemberService {
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

    public int signUp(MemberVO memberVO) {
        return mapper.signup(memberVO);
    }
}