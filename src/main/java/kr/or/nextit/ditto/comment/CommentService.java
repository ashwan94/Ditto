package kr.or.nextit.ditto.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentMapper mapper;

    public List<CommentVO> getCommentList(int boardNo){
        return mapper.getCommentList(boardNo);
    }

    public int commentRegister(CommentVO vo){
        return mapper.commentRegister(vo);
    }
}
