package kr.or.nextit.ditto.member;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

// MemberMapper.java
@Mapper // MyBatis Mapper 인터페이스임을 명시
public interface MemberMapper {
    List<MemberVO> findAll(); // 모든 멤버 조회
    MemberVO findById(int memberNo); // 특정 멤버 조회
    void save(MemberVO member); // 멤버 저장
    void update(MemberVO member); // 멤버 업데이트
    void deleteById(int memberNo); // 특정 멤버 삭제
}
