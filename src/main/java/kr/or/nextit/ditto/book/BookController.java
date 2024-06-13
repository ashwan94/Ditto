package kr.or.nextit.ditto.book;

import kr.or.nextit.ditto.common.PaginationInfo;
import kr.or.nextit.ditto.common.SearchVO;
import kr.or.nextit.ditto.podcast.PodcastVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private final BookService service;

    @GetMapping("/book/list")
    public List<BookVO> selectBooks() {
        List<BookVO> vo = service.selectBooks();
        log.info("책 목록 조회 : {}", vo);
        return vo;
    }


}
