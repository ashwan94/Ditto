package kr.or.nextit.ditto.freeboard;

import kr.or.nextit.ditto.common.SearchVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/freeBoard")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;

    // 전체 게시글 조회 + 개수 조회
    @GetMapping("/list")
    public HashMap<String, Object> getBoardList(SearchVO vo) {
        List<FreeBoardVO> boardList = freeBoardService.getBoardList(vo);
        int boardListCount = freeBoardService.getBoardListCount(vo);
        HashMap<String, Object> map = new HashMap<>();
        map.put("boardList", boardList);
        map.put("boardListCount", boardListCount);
        return map;
    }

    // 게시글 검색
    @GetMapping("/search")
    public List<FreeBoardVO> searchBoardList(String keyword, String type) {
        List<FreeBoardVO> vo;
        if ("글쓴이".equals(type)){
            vo = freeBoardService.searchBoardListByMemberId(keyword); // 제목 기준 검색
        }else{
            vo = freeBoardService.searchBoardListByTitle(keyword); // 검색어 기준 검색
        }
        return vo;
    }

    // TODO
    // 1. 자유게시판 조회수, 게시글 작성에 대해 Controller 에서 param, Mapping 정보를 변경하였으므로 수정 필요
    // 2. 조회수 중복 증가 방지 처리

    // 조회수 증가 + 게시글 상세조회
    @GetMapping("/view")
    public FreeBoardVO getBoardDetail(int freeBoardNo) {
        freeBoardService.incrementHits(freeBoardNo);
        return  freeBoardService.getBoardDetail(freeBoardNo);
    }

    // 게시글 작성
    @PostMapping("/register")
    public ResponseEntity<?> addBoard(@RequestBody FreeBoardVO post) {
        freeBoardService.addBoard(post); // useGeneratedKeys 속성을 이용해 post.getFreeBoardNo 가
                                         // 방금 insert 된 data 의 freeBoardNo 로 변경됨 => 따로 변수에 담지 않아도 됨!
        return ResponseEntity.ok(post.getFreeBoardNo());
    }

    // 게시글 수정
    // * 이 부분이 제일 난해했다
    // 계속 400, 415 등 이상한 에러가 발생함
    // 대표적으로 Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' 를 지원하지 않는다고 나온다
    // @RequestBody 를 삭제했고 axios.post(url, config) 로 썼다가 axios.post(url, null, config) 로 수정하니
    // controller 에서 제대로 데이터를 받아올 수 있게 됐다
    // React-Quill 같은 라이브러리와 합쳐진 상태로 게시판을 작성하려니 머리가 터진다
    // 이미지 처리 때문에 자잘한 에러가 많이 발생하는듯함!
    @PostMapping("/update")
    public void updatePost(FreeBoardVO vo) {
        freeBoardService.updatePost(vo);
    }

    // 게시글 삭제
    @PutMapping("/delete")
    public void deletePost(int freeBoardNo) {
        freeBoardService.deletePost(freeBoardNo);
    }
}
