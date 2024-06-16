package kr.or.nextit.ditto.freeboard;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FreeBoardService {
    private final FreeBoardMapper mapper;

    // 모든 게시글 조회
    public List<FreeBoardVO> getBoardList(){
        return mapper.getBoardList();
    }

    // 제목으로 검색
    public List<FreeBoardVO> searchBoardListByTitle(@Param("keyword") String keyword){
        return mapper.searchBoardListByTitle(keyword);
    }

    // 작성자 이름으로 검색
    public List<FreeBoardVO> searchBoardListByMemberId(@Param("keyword") String keyword){
        return mapper.searchBoardListByMemberId(keyword);
    }

    // 게시글 작성
    public int addBoard(FreeBoardVO post) {
        return mapper.addBoard(post);
    }

    // 상세 게시글 정보
    public FreeBoardVO getBoardDetail(int freeBoardNo) {
        return mapper.getBoardDetail(freeBoardNo);
    }

    // 조회수
    public void incrementHits(int freeBoardNo) {
        mapper.incrementHits(freeBoardNo);
    }

    // 게시글 수정
    public void updatePost(FreeBoardVO vo){
        mapper.updatePost(vo);
    }

    // 게시글 삭제
    public void deletePost(int freeBoardNo){
        mapper.deletePost(freeBoardNo);
    }
}
