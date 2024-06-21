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
    void passwordChange(MemberVO post); // 비밀번호 수정
    void updateMemberData(MemberVO post); // 회원정보 수정
}
