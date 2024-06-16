package kr.or.nextit.ditto.freeboard;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface FreeBoardMapper {
    List<FreeBoardVO> getBoardList();                                               // 모든 게시글 조회
    List<FreeBoardVO> searchBoardListByTitle(@Param("keyword") String keyword);     // 제목으로 게시글 검색
    List<FreeBoardVO> searchBoardListByMemberId(@Param("keyword") String keyword);  // 작성자로 게시글 검색
    FreeBoardVO getBoardDetail(int freeBoardNo);                                    // 게시글 상세보기
    void incrementHits(int freeBoardNo);                                            // 게시글 조회수
    int addBoard(FreeBoardVO post);     // 게시글 쓰기
    void updatePost(FreeBoardVO vo);    // 게시글 수정
    void deletePost(int freeBoardNo);   // 게시글 삭제
}