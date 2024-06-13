package kr.or.nextit.ditto.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// MemberService.java
@Service // Spring 서비스 클래스임을 명시
public class MemberService {
    @Autowired // 의존성 주입
    private MemberMapper memberMapper; // MemberMapper 인터페이스 주입

    public List<MemberVO> findAll() { // 모든 멤버 조회 메서드
        return memberMapper.findAll();
    }

    public MemberVO findById(int memberNo) { // 특정 멤버 조회 메서드
        return memberMapper.findById(memberNo);
    }

    public void save(MemberVO member) { // 멤버 저장 메서드
        memberMapper.save(member);
    }

    public void update(MemberVO member) { // 멤버 업데이트 메서드
        memberMapper.update(member);
    }

    public void deleteById(int memberNo) { // 특정 멤버 삭제 메서드
        memberMapper.deleteById(memberNo);
    }
}
