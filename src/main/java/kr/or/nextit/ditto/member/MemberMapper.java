package kr.or.nextit.ditto.member;

import org.apache.ibatis.annotations.Mapper;

import java.lang.reflect.Member;

@Mapper
public interface MemberMapper {
    MemberVO findMember(MemberVO memberVO);
    int checkIdIsDuplicated(String memberId);
    int checkNicknameIsDuplicated(String memberNickname);
    int signup(MemberVO memberVO);
    MemberVO searchMemberInfo(String memberId);
    void passwordChange(MemberVO post); // 마이페이지 비밀번호 수정
    void updateMemberData(MemberVO post); // 마이페이지 회원정보 수정


    // 회원 멤버십 구독 가입
    void updateMemberSubscribe(String memberId);
}
