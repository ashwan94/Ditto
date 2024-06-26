package kr.or.nextit.ditto.comment;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class CommentController {
    private final CommentService service;

    // 전체 댓글 목록 조회
    @GetMapping("/list")
    public List<CommentVO> getCommentList(int boardNo){
        List<CommentVO> vo = service.getCommentList(boardNo);
        return vo;
    }

    // 댓글 입력
    @Transactional
    @PostMapping("/register")
    public int commentRegister(@RequestBody CommentVO vo){
        return service.commentRegister(vo);
    }
}
