package kr.or.nextit.ditto.freeboard;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper // MyBatis 매퍼 인터페이스임을 명시
public interface FreeBoardMapper {
    List<FreeBoardVO> getBoardList(); // 모든 게시물을 조회하는 메서드
    List<FreeBoardVO> searchBoardListByTitle(@Param("keyword") String keyword); // 제목을 기준으로 게시물을 검색하는 메서드
    List<FreeBoardVO> searchBoardListByMemberId(@Param("keyword") String keyword);
    FreeBoardVO getBoardDetail(@Param("freeBoardNo") int freeBoardNo);
//    void createPost(FreeBoardVO post); // 새로운 게시물을 생성하는 메서드
//    void updatePost(FreeBoardVO post); // 기존 게시물을 수정하는 메서드
//    void deletePost(int freeBoardNo); // 게시물을 삭제하는 메서드
}
