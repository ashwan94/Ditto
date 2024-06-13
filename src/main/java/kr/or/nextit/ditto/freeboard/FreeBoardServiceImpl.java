package kr.or.nextit.ditto.freeboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Service 레이어의 구현체임을 나타냄
public class FreeBoardServiceImpl implements FreeBoardService {

    @Autowired // 자동으로 주입받음
    private FreeBoardMapper freeBoardMapper;

    @Override
    public List<FreeBoardVO> getAllFreeBoards() {
        return freeBoardMapper.getAllFreeBoards(); // Mapper를 통해 모든 게시글 조회
    }
}
