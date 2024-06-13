package kr.or.nextit.ditto.book;

import kr.or.nextit.ditto.common.SearchVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private final BookService service;

    @GetMapping("/book/list")
    public HashMap<String, Object> selectBooks(SearchVO vo, @RequestParam(value = "currentPageNo", defaultValue = "1") int currentPageNo) {
        // 페이지네이션 기본 설정 (정적, 변동X)
        int totalCount = service.getBookListCount(vo);
        List<BookVO> list = service.selectBooks(vo);

        log.info("책 목록 조회 : {}", list);
        log.info("인덱스 조회 : {}", vo);

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("list", list);
        map.put("vo", vo);
        map.put("totalCount", totalCount);
        System.out.println("====>");
        System.out.println(map);
        return map;
    }


}