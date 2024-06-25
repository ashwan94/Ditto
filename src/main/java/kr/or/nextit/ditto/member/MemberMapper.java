package kr.or.nextit.ditto.member;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.lang.reflect.Member;
import java.util.List;

@Mapper
public interface MemberMapper {
    MemberVO findMember(MemberVO memberVO);
    int checkIdIsDuplicated(String memberId);
    int checkNicknameIsDuplicated(String memberNickname);
    int signup(MemberVO memberVO);
    MemberVO searchMemberInfo(String memberId);
    void passwordChange(MemberVO post); // 마이페이지 비밀번호 수정
    void updateMemberData(MemberVO post); // 마이페이지 회원정보 수정
    List<MemberVO> adminPageMemberList(); // 관리자 페이지 회원 전체 조회
    void adminPageMemberDeleteY(MemberVO memberId); // 관리자 페이지 회원 비활성화

    void adminPageMemberDeleteN(MemberVO memberId); // 관리자 페이지 회원 활성화
    void adminMemberSubStatus(MemberVO memberVO); // 관리자 페이지 멤버십 상태변경

    List<MemberVO> adminPageMemberClickListSearch(MemberVO memberId); // 도서대여 이력에서 회원 아이디클릭시 해당 회원정보조회
    List<MemberVO> adminPageSearchMemberIdData(@Param("keyword") String keyword);
}
