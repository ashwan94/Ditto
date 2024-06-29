package kr.or.nextit.ditto.freeboard;

import kr.or.nextit.ditto.common.SearchVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class FreeBoardService {
    private final FreeBoardMapper mapper;

    // 모든 게시글 조회
    public List<FreeBoardVO> getBoardList(SearchVO vo){
        return mapper.getBoardList(vo);
    }

    // 모든 게시글 개수 조회
    public int getBoardListCount(SearchVO vo){
        return mapper.getBoardListCount(vo);
    }

    // 제목으로 검색
    public List<FreeBoardVO> searchBoardListByTitle(String searchWord){
        return mapper.searchBoardListByTitle(searchWord);
    }

    // 작성자 이름으로 검색
    public List<FreeBoardVO> searchBoardListByMemberId(String searchWord){
        return mapper.searchBoardListByMemberId(searchWord);
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
