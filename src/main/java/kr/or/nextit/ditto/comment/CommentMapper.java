package kr.or.nextit.ditto.comment;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    List<CommentVO> getCommentList(int boardNo);
    int commentRegister(CommentVO vo);
}
