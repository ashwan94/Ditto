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
    public String getProfile(String memberId){return mapper.getProfile(memberId);} // 프로필 이미지 조회
    public void registerProfile(String imageUrl, String memberId) {mapper.registerProfile(imageUrl, memberId);} // 프로필 이미지 등록
    public MemberVO searchMemberInfo(String memberId) {
        return mapper.searchMemberInfo(memberId);
    }
    public void passwordChange(MemberVO post){
        mapper.passwordChange(post); // 마이페이지 비밀번호 수정
    }
    public void updateMemberData(MemberVO post){
        mapper.updateMemberData(post); // 마이페이지 회원정보 수정
    }



    // 회원 멤버십 구독 가입
    public void updateMemberSubscribe(String memberId) {
        mapper.updateMemberSubscribe(memberId);
    }

    // 회원 탈퇴
    public void deleteMember(String memberId) {
        mapper.deleteMember(memberId);
    }



}