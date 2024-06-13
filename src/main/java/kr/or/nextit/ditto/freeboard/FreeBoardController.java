package kr.or.nextit.ditto.freeboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // RESTful 웹 서비스의 컨트롤러임을 나타냄
@RequestMapping("/freeboard") // 기본 경로 설정
public class FreeBoardController {

    @Autowired // 자동으로 주입받음
    private FreeBoardService freeBoardService;

    @GetMapping("/list") // GET 요청을 처리하며, /list 경로로 매핑
    public List<FreeBoardVO> getAllFreeBoards() {
        return freeBoardService.getAllFreeBoards(); // 서비스 레이어를 통해 모든 게시글 조회
    }
}
