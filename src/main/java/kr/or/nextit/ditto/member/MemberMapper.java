package kr.or.nextit.ditto.member;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    MemberVO findMember(MemberVO memberVO);
    int checkIdIsDuplicated(String memberId);
    int checkNicknameIsDuplicated(String memberNickname);
    int signup(MemberVO memberVO);
    MemberVO searchMemberInfo(String memberId);
    void passwordChange(MemberVO post); // 비밀번호수정
}
