package kr.or.nextit.ditto.member;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    MemberVO findMember(LoginRequest login);
}
