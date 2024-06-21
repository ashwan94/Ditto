package kr.or.nextit.ditto.member;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Member;


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

    public MemberVO searchMemberInfo(String memberId) {
        return mapper.searchMemberInfo(memberId);
    }
    public void passwordChange(MemberVO post){
        mapper.passwordChange(post);
    }
    public void updateMemberData(MemberVO post){
        mapper.updateMemberData(post);
    }


}