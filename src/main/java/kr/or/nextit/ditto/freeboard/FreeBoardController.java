package kr.or.nextit.ditto.freeboard;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Slf4j
@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor// Lombok을 사용하여 생성자를 자동으로 생성하고 의존성을 주입합니다.
public class FreeBoardController {

    private final FreeBoardService freeBoardService; // FreeBoardService를 주입받습니다.

    @GetMapping("/freeboard/list")
    @ResponseBody // json 형식으로 보내주기 위해 필요함 @Controller썼을떄고 @RestController 사용 했을떄는  @ResponseBody 안붙여도됨
    // GET 방식으로 보낼떄만 RestController 사용
    public List<FreeBoardVO> getBoardList() {
        List<FreeBoardVO> vo = freeBoardService.getBoardList(); // 모든 게시물을 조회합니다.
        return vo;
    }

    @GetMapping("/freeboard/search")
    @ResponseBody
    public List<FreeBoardVO> searchBoardList(@RequestParam String keyword) {
        List<FreeBoardVO> vo = freeBoardService.searchBoardList(keyword); // 제목을 기준으로 게시물을 검색합니다.
        log.info("결과: {}", vo);
        return vo;
    }

//    @PostMapping
//    public void createPost(@RequestBody FreeBoardVO post) {
//        freeBoardService.createPost(post); // 새로운 게시물을 생성합니다.
//    }
//
//    @PutMapping
//    public void updatePost(@RequestBody FreeBoardVO post) {
//        freeBoardService.updatePost(post); // 기존 게시물을 수정합니다.
//    }
//
//    @DeleteMapping("/freeboard/{freeBoardNo}")
//    public void deletePost(@PathVariable int freeBoardNo) {
//        freeBoardService.deletePost(freeBoardNo); // 게시물을 삭제합니다.
//    }
}
