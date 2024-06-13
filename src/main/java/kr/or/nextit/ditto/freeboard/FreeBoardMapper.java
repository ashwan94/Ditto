package kr.or.nextit.ditto.freeboard;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper // MyBatis Mapper 인터페이스임을 나타냄
public interface FreeBoardMapper {
    List<FreeBoardVO> getAllFreeBoards(); // 모든 활성화된 게시글 조회 메서드
}
