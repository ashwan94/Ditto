package kr.or.nextit.ditto.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService
{
    private final MemberMapper mapper;
    public MemberVO findMember(LoginRequest login) {
        return mapper.findMember(login);
    }
}