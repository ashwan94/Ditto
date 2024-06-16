package kr.or.nextit.ditto.freeboard;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Slf4j
@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor// Lombok을 사용하여 생성자를 자동으로 생성하고 의존성을 주입
public class FreeBoardController {

    private final FreeBoardService freeBoardService; // FreeBoardService를 주입

    @GetMapping("/freeboard/list")
    @ResponseBody // json 형식으로 보내주기 위해 필요함 @Controller썼을떄고 @RestController 사용 했을떄는  @ResponseBody 안붙여도됨
    // GET 방식으로 보낼떄만 RestController 사용
    public List<FreeBoardVO> getBoardList() {
        List<FreeBoardVO> vo = freeBoardService.getBoardList(); // 모든 게시물을 조회=
        return vo;
    }

    @GetMapping("/freeboard/search")
    @ResponseBody
    public List<FreeBoardVO> searchBoardList(@RequestParam String keyword, @RequestParam String type) {
        List<FreeBoardVO> vo;
        if ("글쓴이".equals(type)){
            vo = freeBoardService.searchBoardListByMemberId(keyword); // 제목을 기준으로 게시물 검색
        }else{
            vo = freeBoardService.searchBoardListByTitle(keyword); // 검색어를 기준으로 게시물 검색
        }
        return vo;
    }

    @GetMapping("/freeboard/view/{freeBoardNo}")
    @ResponseBody
    public FreeBoardVO getBoardDetail(@PathVariable int freeBoardNo) {
        return freeBoardService.getBoardDetail(freeBoardNo);
    }

    @PostMapping("/freeboard")
    @ResponseBody
    public ResponseEntity<String> addBoard(@RequestBody FreeBoardVO post) {
        freeBoardService.addBoard(post); // 새로운 게시물을 생성
        return ResponseEntity.ok("포스트 생성 성고옹!");
    }
//
//    @PutMapping
//    public void updatePost(@RequestBody FreeBoardVO post) {
//        freeBoardService.updatePost(post); // 기존 게시물을 수정
//    }
//
//    @DeleteMapping("/freeboard/{freeBoardNo}")
//    public void deletePost(@PathVariable int freeBoardNo) {
//        freeBoardService.deletePost(freeBoardNo); // 게시물을 삭제
//    }
}
