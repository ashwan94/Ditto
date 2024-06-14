package kr.or.nextit.ditto.book;

import kr.or.nextit.ditto.common.SearchVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class BookController2 {

//    @GetMapping("/book/list")
    public String selectBooks(SearchVO vo, @RequestParam(value = "currentPageNo", defaultValue = "1") int currentPageNo) {
        System.out.println(currentPageNo);
        System.out.println(vo);
        System.out.println("bbbbbbbb");
        return "aaaa";
    }

}
